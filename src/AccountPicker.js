import AccountPicker from "./AccountPicker.html";
import data from "./data.js";

const host = window.location.host;

const filteredData = data.filter(function(entry) {
  return entry.environment === host;
});

// TODO: handle empty filtered set
const accounts = filteredData[0].accounts;
const selectors = filteredData[0].selectors;

var Bookmarklet = new AccountPicker({
  target: document.getElementById('app'),
  data: {
    accounts: accounts,
    selectors: selectors
  }
});

export default Bookmarklet;
