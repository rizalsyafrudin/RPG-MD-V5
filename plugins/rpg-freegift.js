let handler = async(m, { conn, args, usedPrefix }) => {

    if (args.length == 0) return conn.reply(m.chat, `Harap masukan Kode FreeGiftmu!`, m)
    if (args[0] == 'fangzbot_091' || args[0] == 'Malix Ganteng' || args[0] == 'BloowwXx' || args[0] == 'BbL016JJQBCSr54OwwW0' || args[0] == 'MalixGamteng120' || args[0] == 'kode013923') {

    if (new Date - global.db.data.users[m.sender].lastgift > 86400000) {
       conn.reply(m.chat, '*🎉SELAMAT*\nKamu telah mendapatkan\n5000000 XP✨\n100 Limit 🎫\n100000000 Money 💹\n1 Potion  🥤\n100 Gold 🪙\n1000000 Atm 💳 \n50 Legendary 🗃️', m)
    global.db.data.users[m.sender].exp += 5000000
    global.db.data.users[m.sender].limit += 100
    global.db.data.users[m.sender].money +=10000000
    global.db.data.users[m.sender].gold += 100
    global.db.data.users[m.sender].legendary += 50
    global.db.data.users[m.sender].atm += 1000000
    global.db.data.users[m.sender].robo += 1
    global.db.data.users[m.sender].petFood += 2
    global.db.data.users[m.sender].lastclaim = new Date * 1
} else conn.reply(m.chat, '[❗] Kode Gift Gratis hanya dapat digunakan sehari sekali ! dan kode hanya bisa di pakai sekali !\n\nKetik *!buygift* untuk membeli kodegift premium', m)
   } else {
        conn.reply(m.chat, `*「 KODE FREE TIDAK VALID 」*\n\nSilahkan daftar terlebih dahulu untuk mendapatkan kodegift gratis!\n\nKetik !daftar namamu|umurmu`, m)
    }
}
handler.help = ['freegift <kode>']
handler.tags = ['rpg']
handler.command = /^(freegift)$/i

export default handler 
