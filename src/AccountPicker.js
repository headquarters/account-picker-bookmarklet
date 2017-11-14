import AccountPicker from "./AccountPicker.html";
import data from "./data.js";

// TODO: logic for matching hostname with environment

const accounts = data[0].accounts;

var Bookmarklet = new AccountPicker({
  target: document.getElementById('app'),
  data: {
    accounts: accounts
  }
});

export default Bookmarklet;
