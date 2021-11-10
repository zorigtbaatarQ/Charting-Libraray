import Datafeed from "./datafeed.js";
import Datafeed_test from "./Datafeed_test.js";

window.tvWidget = new TradingView.widget({
  symbol: "CHKH:TNL/MNT",
  // symbol: "Bitfinex:BTC/USD",
  interval: "1D",
  fullscreen: true,
  container: "tv_chart_container",
  datafeed: Datafeed,
  library_path: "../charting_library_clonned_data/charting_library/",
});
