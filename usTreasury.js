export const template = {
  results: {
    copyright: "Copyright (c) 2023 Feather Finance, Inc.",
    symbolcount: 1,
    history: [
      {
        equityinfo: {
          longname: "UST_1M (Treasury BC_1MONTH)",
          shortname: "UST_1M",
        },
        unadjusted: true,
        adjusted: false,
        end: "", // "2020-10-31",
        start: "", // "2020-01-01",
        eoddata: [
          // { date: "2020-10-31", close: 0.01 },
          // { date: "2020-09-30", close: 0.01 },
          // { date: "2020-01-01", close: 0.01 },
        ],
        key: {
          exShName: "UST",
          symbol: "UST_1M",
          exchange: "UST",
          exLgName: "US Treasury Daily Yield Curve",
          ffUrl:
            "https://s3.us-east-2.amazonaws.com/debugdata.featherfinance.com/stocks/UST_1M.json",
        },
        symbolstring: "UST_1M",
      },
    ],
  },
};

export const termStructure = {
  UST_1M: "d:BC_1MONTH",
  UST_2M: "d:BC_2MONTH",
  UST_3M: "d:BC_3MONTH",
  UST_4M: "d:BC_4MONTH",
  UST_6M: "d:BC_6MONTH",
  UST_1Y: "d:BC_1YEAR",
  UST_2Y: "d:BC_2YEAR",
  UST_3Y: "d:BC_3YEAR",
  UST_5Y: "d:BC_5YEAR",
  UST_7Y: "d:BC_7YEAR",
  UST_10Y: "d:BC_10YEAR",
  UST_20Y: "d:BC_20YEAR",
  UST_30Y: "d:BC_30YEAR",
};
