const chalk = require('chalk');

module.exports = {
  logLogin: (username) => {
    console.log(chalk.blue(`> User ${username} logged in`));
  },

  sendNotification: (username) => {
    console.log(chalk.green(`> Notification sent to ${username}`));
  },

  logMessageReceived: (from, message) => {
    console.log(chalk.yellow(`> Message from ${from}: ${message}`));
  },

  syncData: (username) => {
    console.log(chalk.cyan(`> Syncing data for ${username}...`));
  },

  dataSynced: (username) => {
    console.log(chalk.magenta(`> Data sync complete for ${username}`));
  }
};
