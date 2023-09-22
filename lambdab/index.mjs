import AWS from "aws-sdk";
const s3 = new AWS.S3();

export const handler = async (event) => {
  /*
    // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello World!"),
  };
  return response;
  */
  try {
    // Specify the S3 bucket and file key
    const bucketName = "ust-ff-jason";
    const ust1M = "UST_1M.json"; // Replace with your file's path and name
    const ust1Y = "UST_1Y.json";
    const ust2M = "UST_2M.json";
    const ust2Y = "UST_2Y.json";
    const ust3M = "UST_3M.json";
    const ust3Y = "UST_3Y.json";
    const ust4M = "UST_4M.json";
    const ust5Y = "UST_5Y.json";
    const ust6M = "UST_6M.json";
    const ust7Y = "UST_7Y.json";
    const ust10Y = "UST_10Y.json";
    const ust20Y = "UST_20Y.json";
    const ust30Y = "UST_30Y.json";

    // Specify S3 parameters
    const paramsUst1M = { Bucket: bucketName, Key: ust1M };
    const paramsUst1Y = { Bucket: bucketName, Key: ust1Y };
    const paramsUst2M = { Bucket: bucketName, Key: ust2M };
    const paramsUst2Y = { Bucket: bucketName, Key: ust2Y };
    const paramsUst3M = { Bucket: bucketName, Key: ust3M };
    const paramsUst3Y = { Bucket: bucketName, Key: ust3Y };
    const paramsUst4M = { Bucket: bucketName, Key: ust4M };
    const paramsUst5Y = { Bucket: bucketName, Key: ust5Y };
    const paramsUst6M = { Bucket: bucketName, Key: ust6M };
    const paramsUst7Y = { Bucket: bucketName, Key: ust7Y };
    const paramsUst10Y = { Bucket: bucketName, Key: ust10Y };
    const paramsUst20Y = { Bucket: bucketName, Key: ust20Y };
    const paramsUst30Y = { Bucket: bucketName, Key: ust30Y };

    // Read the JSON file from S3
    // Parse the JSON data
    const s3Response1M = await s3.getObject(paramsUst1M).promise();
    const jsondata1M = JSON.parse(s3Response1M.Body.toString("utf-8"));
    const s3Response1Y = await s3.getObject(paramsUst1Y).promise();
    const jsondata1Y = JSON.parse(s3Response1Y.Body.toString("utf-8"));
    const s3Response2M = await s3.getObject(paramsUst2M).promise();
    const jsondata2M = JSON.parse(s3Response2M.Body.toString("utf-8"));
    const s3Response2Y = await s3.getObject(paramsUst2Y).promise();
    const jsondata2Y = JSON.parse(s3Response2Y.Body.toString("utf-8"));
    const s3Response3M = await s3.getObject(paramsUst3M).promise();
    const jsondata3M = JSON.parse(s3Response3M.Body.toString("utf-8"));
    const s3Response3Y = await s3.getObject(paramsUst3Y).promise();
    const jsondata3Y = JSON.parse(s3Response3Y.Body.toString("utf-8"));
    const s3Response4M = await s3.getObject(paramsUst4M).promise();
    const jsondata4M = JSON.parse(s3Response4M.Body.toString("utf-8"));
    const s3Response5Y = await s3.getObject(paramsUst5Y).promise();
    const jsondata5Y = JSON.parse(s3Response5Y.Body.toString("utf-8"));
    const s3Response6M = await s3.getObject(paramsUst6M).promise();
    const jsondata6M = JSON.parse(s3Response6M.Body.toString("utf-8"));
    const s3Response7Y = await s3.getObject(paramsUst7Y).promise();
    const jsondata7Y = JSON.parse(s3Response7Y.Body.toString("utf-8"));
    const s3Response10Y = await s3.getObject(paramsUst10Y).promise();
    const jsondata10Y = JSON.parse(s3Response10Y.Body.toString("utf-8"));
    const s3Response20Y = await s3.getObject(paramsUst20Y).promise();
    const jsondata20Y = JSON.parse(s3Response20Y.Body.toString("utf-8"));
    const s3Response30Y = await s3.getObject(paramsUst30Y).promise();
    const jsonData30Y = JSON.parse(s3Response30Y.Body.toString("utf-8"));

    // Now you can work with the JSON data as needed
    /* console.log("JSON data:", jsondata1M, "\n", jsondata1Y, "\n", jsondata2M, "\n",
      jsondata2Y, "\n", jsondata3M, "\n", jsondata3Y, "\n", jsondata4M, "\n",
      jsondata5Y, "\n", jsondata6M, "\n", jsondata7Y, "\n", jsondata10Y, "\n",
      jsondata20Y, "\n", jsonData30Y
    );
    */

    let stk = [];
    // ff("UST_1M", "d:BC_1MONTH", jsondata1M, stk, ust1M);
    function ff(ffTerm, ustTerm, json, stk, ust) {
      const ffJsonMarketData = ust;
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
        json.feed.entry[json.feed.entry.length - 1].content["m:properties"][
          "d:NEW_DATE"
        ];
      dd = dd.substring(0, dd.length - 9);
      eodData.push({
        date: dd,
        close: json.feed.entry[0].content["m:properties"][ustTerm],
      });
      endDate = dd;

      ffJsonMarketData.results.history[0].start = startDate;
      ffJsonMarketData.results.history[0].end = endDate;

      // Putting in eodData in reverse order
      while (stk.length) {
        let hehe = stk[stk.length - 1];
        ust.results.history[0].eoddata.push(hehe);
        stk.pop();
      }
      const sortedUst = ust.results.history[0].eoddata.sort((a, b) => {
        if (a.date < b.date) return 1;
        if (a.date > b.date) return -1;
        return 0;
      });

      console.log(ffTerm, ustTerm);
      console.log("\n");
      console.log(JSON.stringify(sortedUst1M));
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
