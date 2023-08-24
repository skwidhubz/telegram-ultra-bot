
# Telegram Ultra Bot 🤖
![GitHub license](https://img.shields.io/badge/license-MIT-blue)          
## Table of Contents                      
- [Project description](#description)
- [Installation](#installation)
- [License](#license)
- [Command](#command)
- [Contributors](#contributors)
## Description
A Telegram bot to respond to DM's and post to channels.  

Create a Telegram bot:  
* Search for the “@Botfather” in Telegram
* Start a conversation and type “/newbot”
* Enter the new bot’s name (this will be a display name)
* Enter bot’s username (must end with “_bot”)
* Get bot’s API Token

Get Channel details:
* Create a new channel (if you don’t have it yet)
* Invite your bot to the Channel (search by bot’s username) and add it as an Admin
* Go to https://api.telegram.org/bot{{TOKEN}}/getUpdates
* Replace {{TOKEN}} with your bot’s Token
* Post something to the channel with the bot (so the bot “sees” that it’s added to the channel)
* Refresh the link above and it should have a list of all channels and conversations the bot participates in
* Find the channel’s ID you want to send messages via the bot to. 

<strong>NOTE: Channel’s IDs always start with a minus symbol (-).</strong>

## Installation
The dependencies required for this project are:  
* axios
* dotenv
* node-telegram-bot-api

Create a ```.env``` file with the variables:  
* TGTOKEN = (telegram bot api token)
* TEXTDATA = (the content you want to post to channel)
* CHATID = (chatid from above instructions)

## Command
The command line execution is:  ```npm run start```
## Contributors
[skwidhubz](https://github.com/skwidhubz) contributed to this project.  
Telegram bot set-up help from https://help.nethunt.com/en/

## License
MIT


#### lordradias 💀 2023 
