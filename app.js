const TelegramBot = require('node-telegram-bot-api');
const {TOKENTELEGRAM} = require('./config')
const bot = new TelegramBot(TOKENTELEGRAM, {polling: true});

console.log('Estamos atento a los mensajes')

/**  
* @param msg Recibe como mensaje /start
* @return Retorna un mensaje, con el nombre de usuario identificando al chat recibido.
**/
bot.onText(/^\/start/, function(msg){
  var chatId = msg.chat.id;
  var username = msg.from.username;
  bot.sendMessage(chatId, `Hola ${username}, estamos haciendo mantenimiento en telegram, disculpe las molestias`);
});

/**  
* @param msg Recibe cualquier mensaje
* @return Retorna una confirmacion que el mensaje fue recibido
**/
bot.on('message', function(msg){
  var chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Recibimos su mensaje');
});