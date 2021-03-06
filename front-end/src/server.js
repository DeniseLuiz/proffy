const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')


nunjucks.configure('src/views', { // pasta em que estão os arquivos html, objeto que indica o servidor que está sendo utilizado. noCache = true 
    express: server,
    noCache: true,
    autoescape: false,
})

server // configurar arquivos estáticos
    .use(express.urlencoded({ extended: true })) //prepara o server para receber os parametros como req.body
    .use(express.static('public')) // rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    .listen(5500)