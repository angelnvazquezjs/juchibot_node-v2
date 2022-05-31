// Importamos la API de telegraf
const { Telegraf } = require('telegraf');

// Hacemos la conexion con la API
const bot = new Telegraf('5140540597:AAF3UGfzsgxGh0ULM2ifqOSevgcRla1hy-w');

// Comandos para JuchiBot
bot.start( ctx => {
    ctx.reply('Hola Juchiman, puedes proporcionarme tu matricula?');
});

bot.help( ctx => {
    ctx.reply('En que te puedo ayudar?');
});

bot.command('reinscripcion', ctx => {
    ctx.reply('Comando de Reinscripcion!!');
});

bot.hears('Holaaa', ctx => {
    ctx.reply('Hey, soy JuchiBot, tu asistente Universitario. Para poder brindarte mi ayuda, necesito que escribas cualquiera de los comandos.');
});

bot.on('text', ctx => {
    ctx.reply('Estas texteando');
});

// Inicia el Bot
bot.launch();
