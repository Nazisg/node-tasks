const axios = require('axios')

class DiscordLogger {
    constructor() {
    }

    async log(logModel) {
        const message = {
            content: JSON.stringify(logModel)
        }
        axios.post('https://discord.com/api/webhooks/1246168646389203004/ixQAi-C09iSkLqmhMiV5oEnG9zZ1OLp01bQF_hLFBoV6GPgXuMdLItWRX4XKPMkIt9HP', message)
    }

}
module.exports = DiscordLogger