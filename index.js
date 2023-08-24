require('dotenv').config()
const axios = require('axios');
const TelegramBot = require('node-telegram-bot-api');
const port = 3000;

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TGTOKEN
const bot = new TelegramBot(token, {polling: true});

let textData = process.env.TEXTDATA; // use this for the content of your message.

// Bot-2-Channel Posting function.
async function ChannelPoster (textData) {
  let textToPost = `${textData}`;

  // replace the value below with the Telegram token you receive from @BotFather
  const apiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

  const postData = {
  "chat_id": process.env.CHATID,
  "text": `${textToPost}`,
  "parse_mode": "HTML"
  };

  axios.post(apiUrl, postData)
    .then(response => {
      console.log('Response from the API:', response.data);
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
};

// Execute bot-2-channel-poster
ChannelPoster(textData);


// Bot DM Reply 
async function botDmResponder () {

bot.onText(/\/start/, (msg) => {

  bot.sendMessage(msg.chat.id, `Welcome user ${msg.chat.id}`);
  });

bot.onText(/\/echo (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1]; 

  bot.sendMessage(chatId, resp);
});

// Write response conditions for your bot or use LLM code for response.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageBody = msg.text;
    if (messageBody == "Hi") {
      bot.sendMessage(chatId, 'Hello.. try using "/start"')
    } else {
      bot.sendMessage(chatId, 'bot has received msg');
    };
})
};

botDmResponder();