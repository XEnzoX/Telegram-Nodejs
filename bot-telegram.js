const {Telegraf} = require('telegraf');
const fs = require('fs');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN); 
const lista = require('./components/Json/deleteMs.json');
// const miNumero = new Telegraf(process.env.MI_NUMERO)

// Electronica
const tiendaElectronica = fs.readFileSync('./components/Json/electronica.json');
const electronica = JSON.parse(tiendaElectronica);
let electronicaId = [];

const tiendaDespensa = fs.readFileSync('./components/Json/despensa.json');
const despensa = JSON.parse(tiendaDespensa);
let despensaId = [];

const tiendaBelleza = fs.readFileSync('./components/Json/belleza.json');
const belleza = JSON.parse(tiendaBelleza);
let bellezaId = [];

const tiendaForrajeria = fs.readFileSync('./components/Json/forrajeria.json');
const forrajeria = JSON.parse(tiendaForrajeria);
let forrajeriaId = [];

const tiendaHeladeria = fs.readFileSync('./components/Json/heladeria.json');
const heladeria = JSON.parse(tiendaHeladeria);
let heladeriaId = [];

const tiendaPanificado = fs.readFileSync('./components/Json/panifiadosPasteleria.json');
const panificados = JSON.parse(tiendaPanificado);
let panificadosId = [];

const tiendaPeluqueria = fs.readFileSync('./components/Json/peluqueria.json');
const peluqueria = JSON.parse(tiendaPeluqueria);
let peluqueriaId = [];

bot.command(['electronica', 'electronicas'],(ctx) =>{
    electronica.sort();
    for(let i = 0; i < electronica.length; i++){
            fs.readFile('./components/Json/electronica.json', (err, data) => {
                if(err){
                console.log(err);
                return;
            }
            for(let i = 0; i < electronica.length; i++){
                if(electronicaId.indexOf(electronica[i].id) === -1){
                    ctx.reply(`Nombre: ${electronica[i].name} 
                    \n Ubicacion: ${electronica[i].location} 
                    \n Gps: ${electronica[i].gps}
                    \n Metodos de pagos: ${electronica[i].payment} 
                    \n Horario: ${electronica[i].timetable}`);
                    electronicaId.push(electronica[i].id);
                }
                
            }
        })
    }
});


bot.command(['despensa', 'despensas'],(ctx) =>{
    despensa.sort();
    for(let i = 0; i < despensa.length; i++){
            fs.readFile('./components/Json/despensa.json', (err, data) => {
                if(err){
                console.log(err);
                return;
            }
            for(let i = 0; i < despensa.length; i++){
                if(despensaId.indexOf(despensa[i].id) === -1){
                    ctx.reply(`Nombre: ${despensa[i].name} 
                    \n Ubicacion: ${despensa[i].location} 
                    \n Gps: ${despensa[i].gps}
                    \n Metodos de pagos: ${despensa[i].payment} 
                    \n Horario: ${despensa[i].timetable}`);
                    despensaId.push(despensa[i].id);
                }
                
            }
        })
    }
});

bot.command(['belleza', 'bellezas'],(ctx) =>{
    belleza.sort();
    for(let i = 0; i < belleza.length; i++){
            fs.readFile('./components/Json/belleza.json', (err, data) => {
                if(err){
                console.log(err);
                return;
            }
            for(let i = 0; i < belleza.length; i++){
                if(bellezaId.indexOf(belleza[i].id) === -1){
                    ctx.reply(`Nombre: ${belleza[i].name} 
                    \n Ubicacion: ${belleza[i].location} 
                    \n Gps: ${belleza[i].gps}
                    \n Metodos de pagos: ${belleza[i].payment} 
                    \n Horario: ${belleza[i].timetable}`);
                    bellezaId.push(belleza[i].id);
                }
                
            }
        })
    }
});

bot.command(['forrajeria', 'forrajerias'],(ctx) =>{
    forrajeria.sort();
    for(let i = 0; i < forrajeria.length; i++){
            fs.readFile('./components/Json/forrajeria.json', (err, data) => {
                if(err){
                console.log(err);
                return;
            }
            for(let i = 0; i < forrajeria.length; i++){
                if(forrajeriaId.indexOf(forrajeria[i].id) === -1){
                    ctx.reply(`Nombre: ${forrajeria[i].name} 
                    \n Ubicacion: ${forrajeria[i].location} 
                    \n Gps: ${forrajeria[i].gps}
                    \n Metodos de pagos: ${forrajeria[i].payment} 
                    \n Horario: ${forrajeria[i].timetable}`);
                    forrajeriaId.push(forrajeria[i].id);
                }
                
            }
        })
    }
});

bot.command(['heladeria', 'heladerias'],(ctx) =>{
    heladeria.sort();
    for(let i = 0; i < heladeria.length; i++){
            fs.readFile('./components/Json/heladeria.json', (err, data) => {
                if(err){
                console.log(err);
                return;
            }
            for(let i = 0; i < heladeria.length; i++){
                if(heladeriaId.indexOf(heladeria[i].id) === -1){
                    ctx.reply(`Nombre: ${heladeria[i].name} 
                    \n Ubicacion: ${heladeria[i].location} 
                    \n Gps: ${heladeria[i].gps}
                    \n Metodos de pagos: ${heladeria[i].payment} 
                    \n Horario: ${heladeria[i].timetable}`);
                    heladeriaId.push(heladeria[i].id);
                }
                
            }
        })
    }
});

bot.command(['panificado', 'panificados'],(ctx) =>{
    panificados.sort();
    for(let i = 0; i < panificados.length; i++){
            fs.readFile('./components/Json/panifiadosPasteleria.json', (err, data) => {
                if(err){
                console.log(err);
                return;
            }
            for(let i = 0; i < panificados.length; i++){
                if(panificadosId.indexOf(panificados[i].id) === -1){
                    ctx.reply(`Nombre: ${panificados[i].name} 
                    \n Ubicacion: ${panificados[i].location} 
                    \n Gps: ${panificados[i].gps}
                    \n Metodos de pagos: ${panificados[i].payment} 
                    \n Horario: ${panificados[i].timetable}`);
                    panificadosId.push(panificados[i].id);
                }
                
            }
        })
    }
});

bot.command(['peluqueria', 'peluquerias'],(ctx) =>{
    peluqueria.sort();
    for(let i = 0; i < peluqueria.length; i++){
            fs.readFile('./components/Json/peluqueria.json', (err, data) => {
                if(err){
                console.log(err);
                return;
            }
            for(let i = 0; i < peluqueria.length; i++){
                if(peluqueriaId.indexOf(peluqueria[i].id) === -1){
                    ctx.reply(`Nombre: ${peluqueria[i].name} 
                    \n Ubicacion: ${peluqueria[i].location} 
                    \n Gps: ${peluqueria[i].gps}
                    \n Metodos de pagos: ${peluqueria[i].payment} 
                    \n Horario: ${peluqueria[i].timetable}`);
                    peluqueriaId.push(peluqueria[i].id);
                }
                
            }
        })
    }
});

bot.command(["ayuda", "help"], (ctx) =>{
    ctx.reply(`Usar alguno de los siguietes comandos para interactuar con el bot: \n /electronica Para mostrar las tiendas de venta de cmponentes electronicos, \n /panificados Para mostrar las tiendas de panificados y pastelerias, \n /despensa Para mostrar las despensas y negocios, \n /belleza Para mostrar salones de belleza y estetica, \n /forrajeria Para mostrar los locales de venta de alimento para mascota y demas, \n /heladeria Para mosrar las heladerias, \n /peluqueria Para mosttrrar las peluquerias de niños y adultos. Esta prohibido el uso de malas palabras y envio de imagenes, videos y documentos, si alguno de estos es enviados seran eliminados. Si desea hacer conocer su Negocio, o ya se encuentra y desa pasar información adicional para ser colocada contactarse: ${process.env.MI_NUMERO}`);
})

bot.on('message', (ctx) =>{

        if(ctx.message.photo || ctx.message.video || ctx.message.document){
            ctx.deleteMessage();
        }

        if(!ctx.message || !ctx.message.text){
            return;
        }

        for(let i=0; i < lista.prohibido.length; i++){
            if(ctx.message.text.toLowerCase().indexOf(lista.prohibido[i].toLowerCase()) !== -1){
                ctx.deleteMessage();
                return;
            }
        }
        
});

bot.launch();