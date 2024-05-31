const axios = require('axios')
const {App} = require('@slack/bolt')

class SlackLogger {
    constructor() {
    
    }
    
    app = new App({
        token: process.env.token,
        signingSecret: process.env.signingSecret,
        appToken: process.env.appToken,
        socketMode: true
    });

    async log(logModel) {
        const message = {
            text: JSON.stringify(logModel)
        };

        try {
            await this.app.client.chat.postMessage({
                channel: '#test',
                text: message.text
            });
            console.log('Message posted to Slack successfully');
        } catch (error) {
            console.error('Error posting message to Slack:', error);
        }

}
}
module.exports = SlackLogger