const database = require('./db')
const createProffy = require('./createProffy')
database.then(async(db) => {

    proffyValue = {
        name: "Denise Luiz",
        avatar: "https://avatars.githubusercontent.com/u/61203186?s=460&u=accb91eed17f2fb6ddb72abf680fed639b64804b&v=4",
        whatsapp: "11957869980",
        bio: "Entusiasta das melhores tecnologias de química avançandas. Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
    }

    classValue = {
        subject: "Química",
        cost: "20",
        //    id proffy do bando de dados
    }

    classScheduleValues = [
        // class_id do banco de dados 
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    await createProffy(db, { proffyValue, classValue, classScheduleValues })
})