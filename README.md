# telegrambot

_Como utilizar el bot de telegram_

## Comenzando 🚀

_Primero debes habilitar Fatherbot, el cual es el que te habilita para crear los bots, desde este enlace: https://telegram.me/botfather, cualquier inquietud mirar el manual del bot https://core.telegram.org/bots._

_Una vez que creamos el bot y obtenemos el token lo agregamos en el archivo de configuracion config.js_

```
exports.TOKENTELEGRAM = //token telegram
```

### Instalación 🔧

_Crear la imaagen de docker con_

```
docker build -t telegrambot . 
```

_Una vez generado el contenedor, ejecutarlo_

```
docker run -p 3000:3000 idContenedor
