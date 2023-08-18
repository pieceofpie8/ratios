import { XMLParser } from "fast-xml-parser";
import { readFileSync /* writeFileSync */ } from "fs";
import { template, termStructure } from "./usTreasury.js";

// XML File from US Treasury to get Risk Free Rate
const xmlFile = readFileSync(`${process.cwd()}/treasury.xml`, "utf8");
const parser = new XMLParser();
const json = parser.parse(xmlFile);

let riskFreeRate =
  parseFloat(json.feed.entry[0].content["m:properties"]["d:BC_2MONTH"]) / 100;

console.log("riskFreeRate", riskFreeRate);
console.log("template", template);

Object.entries(termStructure).forEach(([ffTerm, ustTerm]) => {
  const ffJsonMarketData = JSON.parse(JSON.stringify(template));
  json.feed.entry.forEach((e) => {
    const eodData = ffJsonMarketData.results.history[0].eoddata;
    eodData.push({
      date: e.content["m:properties"]["d:NEW_DATE"],
      close: e.content["m:properties"][ustTerm],
    });
    // console.log(
    //   e.content["m:properties"]["d:NEW_DATE"],
    //   e.content["m:properties"][ustTerm]
    // );
  });
  console.log("ffTerm, ustTerm", ffTerm, ustTerm);
  console.log("\n\n");
  console.log(JSON.stringify(ffJsonMarketData));
  console.log("\n\n");
});

// 1 - amend the following variables in the ffJsonMarketData object:
//     "longname" ==> "UST_2M (Treasury BC_2MONTH)", ..., "UST_30Y (Treasury BC_30YEAR)"
//     "shortname" ==> "UST_2M", ..., "UST_30Y"
//     "eoddata.date" ==> change date format from "2023-07-03T00:00:00" to "2023-07-03"
//     "keys.symbol" ==> "UST_2M", ..., "UST_30Y"
//     "ffUrl" ==> "https://s3.us-east-2.amazonaws.com/debugdata.featherfinance.com/stocks/UST_[1M ... 30Y].json"
//     "symbolstring" ==> "UST_2M", ..., "UST_30Y"
//
// 2 - reorder the eoddata objects in the array so that they are in DESCENDING order instead of ASCENDING order
//
// 3 - enter the right end date in the history[0].end variable (same for the start date)
//
// 4 - use writeFileSynch to output json data to files (UST_1M.json, UST_2M.json, etc.)
