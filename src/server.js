const proffys = [{
    name: "Denise Luiz",
    avatar: "https://avatars.githubusercontent.com/u/61203186?s=460&u=accb91eed17f2fb6ddb72abf680fed639b64804b&v=4",
    whatsapp: "11957869980",
    bio: "Entusiasta das melhores tecnologias de química avançandas. Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
    subject: "Química",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220]
}, {
    name: "Débora Bazilio",
    avatar: "https://avatars.githubusercontent.com/u/73707743?s=460&u=76e01602c875e41dbb9738c464bb86ccc1967d9e&v=4",
    whatsapp: "11957869981",
    bio: "As vezes não sei nem onde eu tô, mas consigo me localizar facilmente em qualquer lugar. Tenho memória fotográfica e nunca fico perdido. Eu ensino a galera como não se perder na vida, com lições geográficas simples pra você nunca mais precisar de mapa na sua bela vida.",
    subject: "Geografia",
    cost: "36",
    weekday: [0],
    time_from: [720],
    time_to: [1220]
}, ]


function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    return res.render("study.njk", { proffys, title: "finalmente deu certo essa porra" })
}

function pageGiveClasses(req, res) {
    return res.render("give-classes.html")
}
/*FUNCTIONS SEM O NUNJUCKS

function pageLanding(req, res) {
    return res.sendFile(__dirname + "/views/index.html")
}

function pageStudy(req, res) {
    return res.sendFile(__dirname + "/views/study.html")
}

function pageGiveClasses(req, res) {
    return res.sendFile(__dirname + "/views/give-classes.html")
}
*/

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')


nunjucks.configure('src/views', {
        express: server,
        noCache: true,
        autoescape: false,


    })
    // pasta em que estão os arquivos html, objeto que indica o servidor que está sendo utilizado. noCache = true 
server
// configurar arquivos estáticos
    .use(express.static('public'))
    // rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .listen(5500)