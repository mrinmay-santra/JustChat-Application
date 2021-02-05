const moment = require("moment");

function formatMessage(username, text) {
  return {
    username,
    text,
    time: new Date().toLocaleTimeString(),
  };
}

module.exports = formatMessage;
