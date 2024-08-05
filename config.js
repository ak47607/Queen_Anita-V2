//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Kolkata, India";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Akash:akash@cluster0.ilcd2ez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "India/Kolkata";
global.github = process.env.GITHUB || "https://github.com/ak47607/Akash";
global.gurl = process.env.GURL || "https://wa.me/message/K6OVW2JLF6DTI1";
global.website = process.env.GURL || "https://wa.me/message/K6OVW2JLF6DTI1";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/edbbcd210a6279a856ffa.jpg";
global.devs = "https://wa.me/message/K6OVW2JLF6DTI1";
global.sudo = process.env.SUDO || "919064560840";
global.owner = process.env.OWNER_NUMBER || "919064560840";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/edbbcd210a6279a856ffa.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0tNaGJwVWVPTVB0V3Vvb1lRek5zMmFoRWRFbEo0K1ZQbE5VT0pQVi8zcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3YrMjBiSE5OVnQraWphbEpYYlZTcmtqcjdyZ2t1RDhXMy9JVWNJZmZGbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSmQ4cC9sTzNqVERpOUJqMVFyLy9GcVFHY1hZd2N4aVQ3Mkx1ckZha0Z3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1bDh1d3VjeHp0V3NlY2ZWbndaeU9iQTlvcGJtNEpsU09oV3liU25nSVZzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldKTllUd2tGRVZ2RmU2aDlIUkNpYjNJcGhrQXhQbVRaKzFPd0RjaStsWHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRKZ2dJT0ZzVHJmMnkxcU4rM2c3REYwRkpSNitodjZNZGljTEdtT0lQRVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUxCaHlZeDgvQ3hnQ2NwTk5TZnJMczVVMmVkMVphQjJjV25pbVVtN2FGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVXF4blJLNU5VRnowY1BuaDYyS3BCL1IwU0NuaGc4TFNId20vZjBSdktUND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ink5c1ZyOERoL3p1RGMySlpGcE1VblJkVDdzdENuZFcrcXd5QlcxSG9pNWJ2Y2VyTTh2dlVBOUhJWU9abUk3UmF5ZXRiZWhpaXRubDQyWER0U3lsWkJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIwLCJhZHZTZWNyZXRLZXkiOiJSaVR4cnlWVTl6SHNPSXJLejJqc0p6WGg0c0I2YkpJT2tmcGY0bWZFWUtjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJPVUtnSjdaTFF3LWM1WDItOVhwZkFBIiwicGhvbmVJZCI6ImI0NGRiNTU4LWU4NTMtNGI4My1hZjNmLTRkMmVlOWZiNTY1YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKWVZxcHlHdVJYYkFtQTd2eVJiUjVCZjNHS2c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVzRDWXdyWGovMm9MOGkxcGZ3aGJ3dm91ekRVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IktGUDZSTUwzIiwibWUiOnsiaWQiOiI5MTkwNjQ1NjA4NDA6NzFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8JCMgNOE6o2P4LijypzihqbihqbihqbihqbihqYifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pQRGlsVVFvTXl1dFFZWUF5QUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ims5MCsrWE9IR1REeldWK0E1L0VJUmVnUUZxZHo4L3VlR1ZZajRXOTY5ejQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik9yN29tUVZTWFJ4MmdjRUVab0NRUDgzdXc3QlhKUDBybklPbnpoTnZ2QVpJKzhNbnFDVmtTaEpQK3hxUVZDOGwyaFFHZjQvZ2x1L2w5cU5kY1FRK0R3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ5YWxOdWlsS0sweGk5ZUdsdVR4VTdKVlp2RTdsbGJoYzFnZ1RrcUc1NmhTSHllZG8xaUQra1RKRWlsRkpZL3RXNExTNUZkSHd0M1FFb2JJTTZ6K1JCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxOTA2NDU2MDg0MDo3MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaUGRQdmx6aHhrdzgxbGZnT2Z4Q0VYb0VCYW5jL1A3bmhsV0krRnZldmMrIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNTI1MjI5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdWbiJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`SKETOR_XD-V2™`",
  author: process.env.PACK_AUTHER || "SKETOR_XD-V2",
  packname: process.env.PACK_NAME || "A K A S H",
  botname: process.env.BOT_NAME || "SKETOR_XD-V2",
  ownername: process.env.OWNER_NAME || "S K E T O",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A K A S H").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
