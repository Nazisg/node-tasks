const Transport = require('winston-transport');
const TelegramBot = require('node-telegram-bot-api');

class TelegramTransport extends Transport {
  constructor(opts) {
    super(opts); 
    this.token = opts.token;
    this.chatId = opts.chatId;
    this.level = opts.level || 'info';
    this.bot = new TelegramBot(this.token);
  }

  log(info, callback) {
    setImmediate(() => this.emit('logged', info));

    const message = `[${info.level.toUpperCase()}] ${info.message}\n${info.stack || ''}`;
    this.bot.sendMessage(this.chatId, message)
      .then(() => callback(null, true))
      .catch((err) => callback(err, false));
  }
}

module.exports = TelegramTransport;
