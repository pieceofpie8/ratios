import { XMLParser } from "fast-xml-parser";
import { readFileSync } from "fs";
import axios from "axios";

export const handler = async (event, context) => {
  // const res = await axios.get("http://172.31.19.0:8181/status");
  // const res = await axios.get("http://webcode.me/");
  const res = await axios.get(
    "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/pages/xml?data=daily_treasury_bill_rates&field_tdr_date_value=2023"
  );
  console.log(res.data);
  const xmlFile = readFileSync(`${process.cwd()}/treasury.xml`, "utf8");
  const parser = new XMLParser();
  const json = parser.parse(xmlFile);
  let riskFreeRate =
    parseFloat(json.feed.entry[0].content["m:properties"]["d:BC_2MONTH"]) / 100;
  console.log(riskFreeRate);
  console.log("EVENT: \n" + JSON.stringify(event, null, 2));
  return context.logStreamName;
};
