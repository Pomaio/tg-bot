import { token } from "./config.json"

import { Telegraf, Markup } from 'telegraf'

if (token === undefined) {
    throw new Error('BOT_TOKEN must be provided!')
}

const keyboard = Markup.inlineKeyboard([
    // Markup.button.login('Login', 'http://domain.tld/hash', {
    //     bot_username: 'my_bot',
    //     request_write_access: true
    // }),
    Markup.button.url('❤️', 'http://telegraf.js.org'),
    Markup.button.callback('Delete', 'delete')
])

const bot = new Telegraf(token)
bot.start((ctx) => ctx.)
bot.action('delete', (ctx: any) => ctx.deleteMessage())
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

