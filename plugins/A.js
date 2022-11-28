let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let contoh = fs.readFileSync('./mp3/pokari.opus') 
conn.sendFile(m.chat, contoh, '', '', m, true)
}

handler.customPrefix = /^(bot|.owner|malix)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler
