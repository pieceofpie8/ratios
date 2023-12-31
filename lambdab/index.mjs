import AWS from "aws-sdk";
import axios from "axios";
import { XMLParser } from "fast-xml-parser";
import { parseString } from "xml2js";

const s3 = new AWS.S3();

export const handler = async (event) => {
  try {
    const res = await axios.get(
      "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/pages/xml?data=daily_treasury_yield_curve&field_tdr_date_value=2023"
    );
    let json;
    parseString(res.data, (err, result) => {
      if (err) {
        throw err;
      }
      json = result;
    });

    // Specify the S3 bucket and file keys
    const bucketName = "ust-ff-jason";
    const fileKeys = [
      "UST_1M.json",
      "UST_1Y.json",
      "UST_2M.json",
      "UST_2Y.json",
      "UST_3M.json",
      "UST_3Y.json",
      "UST_4M.json",
      "UST_5Y.json",
      "UST_6M.json",
      "UST_7Y.json",
      "UST_10Y.json",
      "UST_20Y.json",
      "UST_30Y.json",
    ];

    // Specify S3 parameters
    const s3Promises = fileKeys.map(async (fileKey) => {
      const params = { Bucket: bucketName, Key: fileKey };
      const s3Response = await s3.getObject(params).promise();
      return JSON.parse(s3Response.Body.toString("utf-8"));
    });

    // Wait for all S3 reads to complete
    const [
      jsondata1M,
      jsondata1Y,
      jsondata2M,
      jsondata2Y,
      jsondata3M,
      jsondata3Y,
      jsondata4M,
      jsondata5Y,
      jsondata6M,
      jsondata7Y,
      jsondata10Y,
      jsondata20Y,
      jsonData30Y,
    ] = await Promise.all(s3Promises);

    let stk = [];
    ff("UST_1M", "d:BC_1MONTH", json, stk, jsondata1M);
    ff("UST_1Y", "d:BC_1YEAR", json, stk, jsondata1Y);
    ff("UST_2M", "d:BC_2MONTH", json, stk, jsondata2M);
    ff("UST_2Y", "d:BC_2YEAR", json, stk, jsondata2Y);
    ff("UST_3M", "d:BC_3MONTH", json, stk, jsondata3M);
    ff("UST_3Y", "d:BC_3YEAR", json, stk, jsondata3Y);
    ff("UST_4M", "d:BC_4MONTH", json, stk, jsondata4M);
    ff("UST_5Y", "d:BC_5YEAR", json, stk, jsondata5Y);
    ff("UST_6M", "d:BC_6MONTH", json, stk, jsondata6M);
    ff("UST_7Y", "d:BC_7YEAR", json, stk, jsondata7Y);
    ff("UST_10Y", "d:BC_10YEAR", json, stk, jsondata10Y);
    ff("UST_20Y", "d:BC_20YEAR", json, stk, jsondata20Y);
    ff("UST_30Y", "d:BC_30YEAR", json, stk, jsonData30Y);

    function ff(ffTerm, ustTerm, json, stk, ffJsonMarketData) {
      const eodData = ffJsonMarketData.results.history[0].eoddata;
      const equityInfo = ffJsonMarketData.results.history[0].equityinfo;
      const Key = ffJsonMarketData.results.history[0].key;

      // Change longname
      let longName =
        ffTerm + " (Treasury " + ustTerm.substring(2, ustTerm.length) + ")";
      equityInfo.longname = longName;

      // Change shortname according to date
      equityInfo.shortname = ffTerm;
      Key.symbol = ffTerm;
      ffJsonMarketData.results.history[0].symbolstring = ffTerm;

      // Change URL
      let URL = Key.ffUrl;
      URL = URL.substring(0, URL.length - 11);
      URL += ffTerm;
      URL += ".json";
      Key.ffUrl = URL;
      let startDate, endDate;

      let dd =
        json.feed.entry[json.feed.entry.length - 1].content[0][
          "m:properties"
        ][0]["d:NEW_DATE"];
      let dateValue = dd && dd[0] && dd[0]["_"];
      dateValue = dateValue.substring(0, dateValue.length - 9);

      let bc1MonthProperty =
        json.feed.entry[json.feed.entry.length - 1].content[0][
          "m:properties"
        ][0]["d:BC_1MONTH"];
      let bc1MonthValue =
        bc1MonthProperty && bc1MonthProperty[0] && bc1MonthProperty[0]["_"];
      let bc1MonthInt = bc1MonthValue ? parseFloat(bc1MonthValue) : null;

      eodData.push({
        date: dd,
        close: bc1MonthInt,
      });
      endDate = dateValue;

      ffJsonMarketData.results.history[0].start = startDate;
      ffJsonMarketData.results.history[0].end = endDate;

      // Putting in eodData in reverse order
      while (stk.length) {
        let hehe = stk[stk.length - 1];
        ffJsonMarketData.results.history[0].eoddata.push(hehe);
        stk.pop();
      }
      const sortedUst = ffJsonMarketData.results.history[0].eoddata.sort(
        (a, b) => {
          if (a.date < b.date) return 1;
          if (a.date > b.date) return -1;
          return 0;
        }
      );

      console.log(ffTerm, ustTerm);
      console.log("\n");
      console.log(JSON.stringify(sortedUst));
      console.log("\n");
    }
    return {
      statusCode: 200,
      body: "Successful :)",
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: ":(",
    };
  }
};
