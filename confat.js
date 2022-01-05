const fs = require('fs')
const chalk = require('chalk')
const setting = JSON.parse(fs.readFileSync('./setting.json'));

// Other
global.owner = ["62887435047326","62887435047326"]
global.packname = 'ZeeoneOfc'
global.youtube = 'https://m.youtube.com/channel/UCIRJxl_gyyblO0X3k1VJOLQ'
global.author = '© Alphabot MD'
global.sessionName = 'session'
global.flaming = "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text="
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗𝔻𝕠𝕟𝕖, 𝕆𝕜𝕖 𝔻𝕖𝕤𝕦~',
    admin: 'ℙ𝕖𝕣𝕚𝕟𝕥𝕒𝕙 𝕀𝕟𝕚 ℍ𝕒𝕟𝕪𝕒 𝔹𝕚𝕤𝕒 𝔻𝕚𝕘𝕦𝕟𝕒𝕜𝕒𝕟 𝕆𝕝𝕖𝕙 𝔸𝕕𝕞𝕚𝕟 !'',
    botAdmin: 'ℙ𝕖𝕣𝕚𝕟𝕥𝕒𝕙 𝕀𝕟𝕚 ℍ𝕒𝕟𝕪𝕒 𝔹𝕚𝕤𝕒 𝔻𝕚𝕘𝕦𝕟𝕒𝕜𝕒𝕟 𝕂𝕖𝕥𝕚𝕜𝕒 𝔹𝕠𝕥 𝕄𝕖𝕟𝕛𝕒𝕕𝕚 𝔸𝕕𝕞𝕚𝕟  !',
    owner: 'ℙ𝕖𝕣𝕚𝕟𝕥𝕒𝕙 𝕀𝕟𝕚 ℍ𝕒𝕟𝕪𝕒 𝔹𝕚𝕤𝕒 𝔻𝕚𝕘𝕦𝕟𝕒𝕜𝕒𝕟 𝕆𝕝𝕖𝕙 𝕆𝕨𝕟𝕖𝕣 !',
    group: 'ℙ𝕖𝕣𝕚𝕟𝕥𝕒𝕙 𝕀𝕟𝕚 ℍ𝕒𝕟𝕪𝕒 𝔹𝕚𝕤𝕒 𝔻𝕚𝕘𝕦𝕟𝕒𝕜𝕒𝕟 𝔻𝕚 𝔾𝕣𝕠𝕦𝕡 !',
    private: 'ℙ𝕖𝕣𝕚𝕟𝕥𝕒𝕙 𝕀𝕟𝕚 ℍ𝕒𝕟𝕪𝕒 𝔹𝕚𝕤𝕒 𝔻𝕚𝕘𝕦𝕟𝕒𝕜𝕒𝕟 𝔻𝕚 ℙ𝕣𝕚𝕧𝕒𝕥𝕖 !',
	bot: '𝔽𝕚𝕥𝕦𝕣 𝕂𝕙𝕦𝕤𝕦𝕤 ℙ𝕖𝕟𝕘𝕘𝕦𝕟𝕒 ℕ𝕠𝕞𝕠𝕣 𝔹𝕠𝕥',
    errtoimg: '𝕄𝕒𝕒𝕗 𝕊𝕒𝕒𝕥 𝕀𝕟𝕚 𝔹𝕖𝕝𝕦𝕞 𝕊𝕦𝕡𝕡𝕠𝕣𝕥 𝕊𝕥𝕚𝕔𝕜𝕖𝕣 𝔾𝕚𝕗 !',
    wait: '⏳ 𝕊𝕖𝕕𝕒𝕟𝕘 𝔻𝕚 𝕡𝕣𝕠𝕤𝕖𝕤',
	lockCmd: '𝔽𝕚𝕥𝕦𝕣 𝕋𝕚𝕕𝕒𝕜 𝔻𝕚𝕒𝕜𝕥𝕚𝕗𝕜𝕒𝕟 𝕆𝕝𝕖𝕙 𝕆𝕨𝕟𝕖𝕣!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}
global.thumb = fs.readFileSync(setting.thumbnail)

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
