const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = "923402725227"
global.mongodb = process.env.MONGODB_URI || "mongodb://ugykkx9yl6qknshgcown:lJ18kzUxXP5IqyyUZZc@bdzoktb5vy7mozj8zh6k-mongodb.services.clever-cloud.com:2319/bdzoktb5vy7mozj8zh6k"
global.port= process.env.PORT || 3000
global.email = 'nimeshofficial.info@gmail.com'
global.github = 'https://github.com/nimesh-official/Black-Dragon'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '923402725227'
global.devs = '923402725227';
global.website = 'https://github.com/nimesh-official/Black-Dragon'
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/17d25248a18357d93d98e.jpg'
module.exports = {
  botname:   process.env.BOT_NAME || 'KINGBOT',
  ownername: process.env.OWNER_NAME || 'Nimesh Official',
  sessionName:  process.env.SESSION_ID || 'DragonMD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkxRaU9EZkxlYUYzZEY0WVhOU1V0L3M4akJEME9Da0NraCtibDNHV2NFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzNDNmVCYmhvQ0FLS3YxaWNrTzJsT0NKSEZLbElKaW9WU3BGbEp1TDJFST0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5SjBzcm14ZHlRdkdvMGF5U3VSSDh0LzRuMmtpL0FWT2pvQ01XbmFLNWxrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoZTZ3eTFqWi82dTJpcUJ5MVg3QXdvYnJZUjVaZ2hCWnFpcnlnelZRUEc0PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZBVW9MMzg3MEZjZHVsV2dJY25SdTd3WFVRMzBvWHpaM2tzejJmUk1DME09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhiU0ttMVd2Q3QvOXNsQlJQMjZIRDRWYUVPMWRhQkp0ME5rYlFyZzBaRGc9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzMmI3UzlOb1NpTFpORUMrcWxicE0zRVdxbnZoUGR1b000ekdTOVk4SHNtdWFLWEJWOWlGei9ON1c1U3JHbE1oNTdubXc2NnBxWGhsYjNVY1lmZ3BoZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE0MiwiYWR2U2VjcmV0S2V5IjoianJVTXpESHlVdno3N0RUM2dVNHlMdllyS0FsZU9tSkpyMzR1ZlVCbXFRcz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNnFLWl9pbWdRRVM3Rm0zWjJTVmFNQSIsInBob25lSWQiOiJiYTc2NTMwNi01YjI2LTRkZDUtOTM1OC0zZTA1NzE4NTQ4MzEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidTVQSlg0Z2F3Y1doYWhPcFZyOURSRUR2TGFFPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzQU8rVkxzbStLOHpCZ3VoSllOTk1rRjF5bEU9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNJTzQ4UG9ERUxhaHlhY0dHQU09IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InU3NGhIdDROSzZtd053K1NGaWcyVlhSajhFcFJMY0gvcEhITXN5K09ueW89IiwiYWNjb3VudFNpZ25hdHVyZSI6IkRIQStiR0dBTEt5VytWMW1KbFdEcHpPdlFWVlNSYnltUDhkNXdUaHVCZDVZUkV1d0NEUEFMSXloOGtIcU1VV2tTNllkM2hBRWdYMnJua1oybDM1ZUFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJyOGtuUzlGM2lySDVHZHVCWjBmMFFGa3RSbEJoMHlUS0RjNEN2RGMrQ2pHSWlHZkttVEMxSnhmUTdPVHhkOWJ3MDVzNnlBdnkwYjhhQy9Lb3hXY29ndz09In0sIm1lIjp7ImlkIjoiOTIzNDAyNzI1MjI3OjEyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkVUSElDQUwgSEFfX19f8J+lsPCfpbAifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDAyNzI1MjI3OjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJ1K0lSN2VEU3Vwc0RjUGtoWW9ObFYwWS9CS1VTM0IvNlJ4ekxNdmpwOHEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE2OTM2MDE5NzcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRGVuIn0=',
  author:  process.env.PACK_INFO === (";")[0] || 'Nimesh Official',
  auto_read_status :  process.env.AUTO_READ_STATUS || 'false',
  packname:  process.env.PACK_INFO === (";")[1] || 'Black-Dragon',
  autoreaction:  process.env.AUTO_REACTION || 'false',
  antibadword :  process.env.ANTI_BAD_WORD || 'nbwoed',
  alwaysonline:  process.env.ALWAYS_ONLINE || 'false',
  antifake : process.env.FAKE_COUNTRY_CODE || '971',
  readmessage:  process.env.READ_MESSAGE || 'true',
  auto_status_saver: process.env.AUTO_STATUS_SAVER || 'false',
  HANDLERS:  process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || '3',
  disablepm:  process.env.DISABLE_PM || 'false',
  levelupmessage:  process.env.LEVEL_UP_MESSAGE || 'false',
  antilink:  process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE || '',
  autobio:  process.env.AUTO_BIO || 'false',
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY || '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',
  heroku:  process.env.heroku || 'false',
  HEROKU: {
    HEROKU: process.env.HEROKU || 'false',
    API_KEY: process.env.HEROKU_API_KEY || '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab',
    APP_NAME: process.env.HEROKU_APP_NAME || 'zeropgg'
},
  VERSION: process.env.VERSION || 'v.0.0.3',
  LANG: process.env.THEME || 'DRAGON',
  WORKTYPE: process.env.WORKTYPE || 'public'
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
