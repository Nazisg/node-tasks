const { default: axios } = require("axios")

class TelegramLogger {
    constructor() {

    }

    async log(logModel) {
        // console.log('Telegram logging action..')
        // console.log(logModel)

        const token = '7267021299:AAF07qsUc8n0deXht-0puY59_nolswY34sw'
        const chatId = 1086894870

        const message = JSON.stringify(logModel)
        const url = `https://api.telegram.org/bot${token}/sendMessage`

        axios.post(url, {
            chat_id: chatId,
            text: message,
            parse_mode: 'Markdown'
        })
            .then(response => {
                if (response.status != 200) {
                    console.log('Error to send Telegram', response)
                }
            })
            .catch(error => {
                console.log('Error sending to Telegram', error)
            })
    }
}
module.exports = TelegramLogger