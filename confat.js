const fs = require('fs')
const chalk = require('chalk')
const setting = JSON.parse(fs.readFileSync('./setting.json'));

// Other
global.owner = ["62887435047326","62887435047326"]
global.packname = 'ZeeoneOfc'
global.youtube = 'https://m.youtube.com/channel/UCIRJxl_gyyblO0X3k1VJOLQ'
global.author = 'Β© Alphabot MD'
global.sessionName = 'session'
global.flaming = "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text="
global.prefa = ['','!','.','π¦','π€','πΏ']
global.sp = 'β­'
global.mess = {
    sukses: 'π€π»π ππ, πππ π»ππ€π¦~',
    admin: 'βππ£πππ₯ππ πππ βπππͺπ πΉππ€π π»πππ¦πππππ ππππ πΈππππ !'',
    botAdmin: 'βππ£πππ₯ππ πππ βπππͺπ πΉππ€π π»πππ¦πππππ πππ₯πππ πΉπ π₯ πππππππ πΈππππ  !',
    owner: 'βππ£πππ₯ππ πππ βπππͺπ πΉππ€π π»πππ¦πππππ ππππ ππ¨πππ£ !',
    group: 'βππ£πππ₯ππ πππ βπππͺπ πΉππ€π π»πππ¦πππππ π»π πΎπ£π π¦π‘ !',
    private: 'βππ£πππ₯ππ πππ βπππͺπ πΉππ€π π»πππ¦πππππ π»π βπ£ππ§ππ₯π !',
	bot: 'π½ππ₯π¦π£ πππ¦π€π¦π€ βπππππ¦ππ βπ ππ π£ πΉπ π₯',
    errtoimg: 'ππππ ππππ₯ πππ πΉπππ¦π ππ¦π‘π‘π π£π₯ ππ₯πππππ£ πΎππ !',
    wait: 'β³ ππππππ π»π π‘π£π π€ππ€',
	lockCmd: 'π½ππ₯π¦π£ πππππ π»ππππ₯πππππ ππππ ππ¨πππ£!',
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
