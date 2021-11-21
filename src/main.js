import Datafeed from "./datafeed.js";

window.tvWidget = new TradingView.widget({
  symbol: "chkh:TNL/MNT",
  // symbol: "Bitfinex:BTC/USD",
  interval: "1D",
  fullscreen: true,
  container: "tv_chart_container",
  datafeed: Datafeed,
  library_path: "../charting_library_clonned_data/charting_library/",
});
