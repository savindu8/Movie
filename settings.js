const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'Movie-MD&kellQS6I#drh3U5mPFkCinu1bMpzPFstZJHX0HPxsghbbqabB3W4' : process.env.SESSION_ID,
PREFIX: process.env.PREFIX || '.' ,
PORT: process.env.PORT === undefined ? "8000" : process.env.PORT,
BUTTON: process.env.PORT === undefined ? "true" : process.env.PORT,
SUDO: process.env.SUDO === undefined ? '94764766973' : process.env.SUDO,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '94764766973' : process.env.DELETEMSGSENDTO,
ANTI_DELETE : process.env.ANTI_DELETE === undefined ? 'true' : process.env.ANTI_DELETE,
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ?"false" : process.env.AUTO_READ_STATUS,
MODE: process.env.MODE === undefined ?"private" : process.env.MODE,
ANTI_BOT: process.env.ANTI_BOT === undefined ? "false" : process.env.ANTI_BOT,
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE === undefined ? "false" : process.env.ALWAYS_ONLINE,
READ_CMD: process.env.READ_CMD === undefined ? "false" : process.env.READ_CMD,
RECORDING: process.env.RECORDING === undefined ? "false" : process.env.RECORDING,
AUTO_TYPING: process.env.AUTO_TYPING === undefined ? 'false' : process.env.AUTO_TYPING,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgresql://manul:qbWhglRV24IXQqDJbKIbtWADaSRj0e19@dpg-cuokgraj1k6c739an3s0-a/manu_md_db' : process.env.POSTGRESQL_URL,
};
