import { XMLParser } from "fast-xml-parser";
import { readFileSync, writeFileSync } from "fs";
import { template, termStructure } from "./usTreasury.js";
import ust1M from "./UST_1M.json" assert { type: "json" };
import ust1Y from "./UST_1Y.json" assert { type: "json" };
import ust2M from "./UST_2M.json" assert { type: "json" };
import ust2Y from "./UST_2Y.json" assert { type: "json" };
import ust3M from "./UST_3M.json" assert { type: "json" };
import ust3Y from "./UST_3Y.json" assert { type: "json" };
import ust4M from "./UST_4M.json" assert { type: "json" };
import ust5Y from "./UST_5Y.json" assert { type: "json" };
import ust6M from "./UST_6M.json" assert { type: "json" };
import ust7Y from "./UST_7Y.json" assert { type: "json" };
import ust10Y from "./UST_10Y.json" assert { type: "json" };
import ust20Y from "./UST_20Y.json" assert { type: "json" };
import ust30Y from "./UST_30Y.json" assert { type: "json" };

// XML File from US Treasury to get Risk Free Rate
for (let hehe = 11; hehe <= 23; hehe++) {
  const xmlFile = readFileSync(
    `${process.cwd()}/myFunction+xmlFiles/ust20` + hehe.toString() + `.xml`,
    "utf8"
  );
  const parser = new XMLParser();
  const json = parser.parse(xmlFile);

  let stk = [];
  let i = 0;
  ff("UST_1M", "d:BC_1MONTH", json, stk, i, ust1M);
  ff("UST_2M", "d:BC_2MONTH", json, stk, i, ust2M);
  ff("UST_3M", "d:BC_3MONTH", json, stk, i, ust3M);
  ff("UST_4M", "d:BC_4MONTH", json, stk, i, ust4M);
  ff("UST_6M", "d:BC_6MONTH", json, stk, i, ust6M);
  ff("UST_1Y", "d:BC_1YEAR", json, stk, i, ust1Y);
  ff("UST_2Y", "d:BC_2YEAR", json, stk, i, ust2Y);
  ff("UST_3Y", "d:BC_3YEAR", json, stk, i, ust3Y);
  ff("UST_5Y", "d:BC_5YEAR", json, stk, i, ust5Y);
  ff("UST_7Y", "d:BC_7YEAR", json, stk, i, ust7Y);
  ff("UST_10Y", "d:BC_10YEAR", json, stk, i, ust10Y);
  ff("UST_20Y", "d:BC_20YEAR", json, stk, i, ust20Y);
  ff("UST_30Y", "d:BC_30YEAR", json, stk, i, ust30Y);
}

console.log(ust1M.results.history[0].eoddata.length);
console.log(ust2M.results.history[0].eoddata.length);
console.log(ust3M.results.history[0].eoddata.length);
console.log(ust30Y.results.history[0].eoddata.length);

//console.log(" \n\n\n\nEND \n\n\n\n", JSON.stringify(UST_1M_JSON));

// Function to add data to existing files
function ff(ffTerm, ustTerm, json, stk, i, ust) {
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
  json.feed.entry.forEach((e) => {
    // Push End of day Data
    let dd = e.content["m:properties"]["d:NEW_DATE"];
    dd = dd.substring(0, dd.length - 9);

    // Reverse the eoddata objects so that they are in DESCENDING order by implementing stack
    stk.push({
      date: dd,
      close: e.content["m:properties"][ustTerm],
    });

    // Calculate start and end date
    if (!startDate || dd < startDate) startDate = dd;
    if (!endDate || dd > endDate) endDate = dd;
  });
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

  // console.log(ffTerm, ustTerm);
  // console.log("\n");
  // console.log(JSON.stringify(sortedUst1M));
  // console.log("\n");

  // console.log("File created_" + i.toString());
  i = 0;
}
