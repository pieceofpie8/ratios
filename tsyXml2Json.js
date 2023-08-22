import { XMLParser } from "fast-xml-parser";
import { readFileSync, writeFileSync } from "fs";
import { template, termStructure } from "./usTreasury.js";

// XML File from US Treasury to get Risk Free Rate
const xmlFile = readFileSync(`${process.cwd()}/treasury.xml`, "utf8");
const parser = new XMLParser();
const json = parser.parse(xmlFile);

let riskFreeRate =
  parseFloat(json.feed.entry[0].content["m:properties"]["d:BC_2MONTH"]) / 100;
// console.log("riskFreeRate", riskFreeRate);
// console.log("template", template);

// eodData = end of day Data
let i = 0;
let stk = [];
Object.entries(termStructure).forEach(([ffTerm, ustTerm]) => {
  const ffJsonMarketData = JSON.parse(JSON.stringify(template));
  const eodData = ffJsonMarketData.results.history[0].eoddata;
  json.feed.entry.forEach((e) => {
    const equityInfo = ffJsonMarketData.results.history[0].equityinfo;
    const Key = ffJsonMarketData.results.history[0].key;

    // Push End of day Data
    let dd = e.content["m:properties"]["d:NEW_DATE"];
    dd = dd.substring(0, dd.length - 9);

    // Reverse the eoddata objects so that they are in DESCENDING order by implementing stack
    stk.push({
      date: dd,
      close: e.content["m:properties"][ustTerm],
    });

    // Change longname
    let longName =
      ffTerm + " (Treasury " + ustTerm.substring(2, ustTerm.length) + ")";
    equityInfo.longname = longName;

    // Change shortname according to date
    equityInfo.shortname = ffTerm;
    Key.symbol = ffTerm;
    ffJsonMarketData.results.history[0].symbolstring = ffTerm;

    // Change URL
    // if (ffTerm != 'UST_10Y' || ffTerm != 'UST_20Y' || ffTerm != 'UST_30Y') {
    let URL = Key.ffUrl;
    URL = URL.substring(0, URL.length - 11);
    URL += ffTerm;
    URL += ".json";
    Key.ffUrl = URL;
    // }
    // Il y a un bug je ne sais pas pourquoi pour le 10, 20 et 30 year

    // Calculate start and end date
    if (i == 0) ffJsonMarketData.results.history[0].start = dd;
    if (i == 10) ffJsonMarketData.results.history[0].end = dd;

    i++;
  });

  // Putting in eodData in reverse order
  while (stk.length) {
    let hehe = stk[stk.length - 1];
    eodData.push(hehe);
    stk.pop();
  }
  console.log(ffTerm, ustTerm);
  console.log("\n");
  console.log(JSON.stringify(ffJsonMarketData));
  console.log("\n");

  // writeFileSync
  let file = JSON.stringify(ffJsonMarketData);
  writeFileSync("hehe.json" + toString(i), file);
  console.log("File created" + toString(i));
  i = 0;
});

// 1 - amend the following variables in the ffJsonMarketData object:
//     Clear! "longname" ==> "UST_2M (Treasury BC_2MONTH)", ..., "UST_30Y (Treasury BC_30YEAR)"
//     Clear! "shortname" ==> "UST_2M", ..., "UST_30Y"
//     Clear! "eoddata.date" ==> change date format from "2023-07-03T00:00:00" to "2023-07-03"
//     Clear! "keys.symbol" ==> "UST_2M", ..., "UST_30Y"
//     Almost Clear! "ffUrl" ==> "https://s3.us-east-2.amazonaws.com/debugdata.featherfinance.com/stocks/UST_[1M ... 30Y].json"
//     Clear! "symbolstring" ==> "UST_2M", ..., "UST_30Y"
//
// 2 - Clear! reorder the eoddata objects in the array so that they are in DESCENDING order instead of ASCENDING order
//
// 3 - Clear!  enter the right start and end date in the history[0].end variable
//
// 4 - use writeFileSynch to output json data to files (UST_1M.json, UST_2M.json, etc.)
