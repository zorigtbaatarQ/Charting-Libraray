// Make requests to CryptoCompare API
export async function makeApiRequest(path) {
  try {
    const external = "http://192.168.1.229:4446/";
    const response = await fetch(external + `${path}`);

    return response.json();
  } catch (error) {
    throw new Error(`CryptoCompare request error: ${error.status}`);
  }
}

export async function makeApiRequestFromCryptoCompare(path) {
  try {
    const response = await fetch(`https://min-api.cryptocompare.com/${path}`);

    return response.json();
  } catch (error) {
    throw new Error(`CryptoCompare request error: ${error.status}`);
  }
}

export async function makeApiRequestFromLocal(path) {
  try {
    const response = await fetch(`"http://127.0.0.1:8080/"${path}`);

    return response.json();
  } catch (error) {
    throw new Error(`CryptoCompare request error: ${error.status}`);
  }
}

export function getConfigurationData(value = "local") {
  const localConfig = {
    supported_resolutions: ["1D", "1W", "1M"],
    exchanges: [
      {
        value: "CHKH",
        name: "Chinggis Khaan Stocks",
        desc: "Chinggis Khaan",
      },
    ],
    symbols_types: [
      {
        name: "crypto",
        // `symbolType` argument for the `searchSymbols` method, if a user selects this symbol type
        value: "crypto",
      },
      // ...
    ],

    isExternal: true,
  };

  const defaultConfig = {
    supported_resolutions: ["1D", "1W", "1M"],
    exchanges: [
      {
        value: "Bitfinex",
        name: "Bitfinex",
        desc: "Bitfinex",
      },
      {
        // `exchange` argument for the `searchSymbols` method, if a user selects this exchange
        value: "Kraken",

        // filter name
        name: "Kraken",

        // full exchange name displayed in the filter popup
        desc: "Kraken bitcoin exchange",
      },
    ],
    symbols_types: [
      {
        name: "crypto",

        // `symbolType` argument for the `searchSymbols` method, if a user selects this symbol type
        value: "crypto",
      },
      // ...
    ],
    isExternal: false,
  };

  if (value == "local") return localConfig;
  else return defaultConfig;
}

// Generate a symbol ID from a pair of the coins
export function generateSymbol(exchange, fromSymbol, toSymbol) {
  const short = `${fromSymbol}/${toSymbol}`;
  return {
    short,
    full: `${exchange}:${short}`,
  };
}

export function parseFullSymbol(fullSymbol) {
  const match = fullSymbol.match(/^(\w+):(\w+)\/(\w+)$/);
  if (!match) {
    return null;
  }

  return {
    exchange: match[1],
    fromSymbol: match[2],
    toSymbol: match[3],
  };
}
