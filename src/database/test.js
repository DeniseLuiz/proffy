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
        subject: 1,
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

    // await createProffy(db, { proffyValue, classValue, classScheduleValues })

    // Consultar todos os Proffys
    const selectProffys = await db.all("SELECT * FROM proffys")
        // console.log(selectProffys)

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*                             
        FROM proffys 
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
        // console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    console.log(selectClassesSchedules)
})