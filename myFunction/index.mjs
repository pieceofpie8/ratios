import { XMLParser } from 'fast-xml-parser';
import { readFileSync } from 'fs';

export const handler = async (event, context) => {
    const xmlFile = readFileSync(`${process.cwd()}/treasury.xml`, 'utf8');
    const parser = new XMLParser();
    const json = parser.parse(xmlFile);
    let riskFreeRate = parseFloat(json.feed.entry[0].content["m:properties"]["d:BC_2MONTH"]) / 100;
    console.log("EVENT: \n" + JSON.stringify(event, null, 2));
    return context.logStreamName;
};