const { App } = require('@slack/bolt')

class SlackLogger {
    constructor() {
    }

    async log(logModel) {

        const app = new App({
            token: process.env.token,
            signingSecret: process.env.signingSecret
        })

        await app.client.chat.postMessage({
            token: token,
            channel: "test",
            text: logModel
        });
    }
}
module.exports = SlackLogger