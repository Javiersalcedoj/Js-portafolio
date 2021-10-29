//fs: file system, porque vamos a trabajar con un modulo de node que permite trbajar con el sistema operativo y poder enviar y guardar datos segun se necesite
const fs = require ('fs');

//nospermite crear el archivo que te comentaba arriba, creamos un .env en la rais del proyecto y lo llenamos con info
//la info seria, con un elemento que creamos, \n es para crear un espcio
fs.writeFileSync('./.env', `API=${process.env.API}\n`)
//asi creamos un archivo .env en lo que biene siendo el servidor.
 //la pregunta es de donde sacasmos process.env.API eso lo vamos a asignar en netlify para que tenga la variable

 