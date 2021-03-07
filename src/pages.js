const Database = require('./database/db')

const { subjects, weekdays, getSubject, convertHoursToMinutes } = require('./utils/format')

function pageLanding(req, res) {
    return res.render("index.html")
}

async function pageStudy(req, res) {
    const filters = req.query

    if (!filters.subject || !filters.weekday || !filters.time) {
        const db = await Database
        const proffys = await db.all(`
                SELECT classes.*, proffys.*                             
                FROM proffys 
                JOIN classes ON (classes.proffy_id = proffys.id)
                WHERE classes.proffy_id = proffys.id;
            `)

        proffys.map((proffy) => {
            proffy.subject = getSubject(proffy.subject)
        })
        return res.render("study.njk", { proffys, filters, subjects, weekdays })
    }

    const timeToMinutes = convertHoursToMinutes(filters.time)
    const query = `
        SELECT classes.*, proffys.*                             
        FROM proffys 
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE EXISTS(
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekday}
            AND class_schedule.time_from <= ${timeToMinutes}
            AND class_schedule.time_to > ${timeToMinutes}
        )
        AND classes.subject = '${filters.subject}'
    `
    try {
        const db = await Database
        const proffys = await db.all(query)
        proffys.map((proffy) => {
            proffy.subject = getSubject(proffy.subject)
        })
        return res.render("study.njk", { proffys, filters, subjects, weekdays })
    } catch (error) {
        console.log(error)
    }
}

function pageGiveClasses(req, res) {
    return res.render("give-classes.njk", { subjects, weekdays })
}

async function saveClasses(req, res) {
    const createProffy = require('./database/createProffy')

    const proffyValue = {
        name: req.body.name,
        avatar: req.body.avatar,
        whatsapp: req.body.whatsapp,
        bio: req.body.bio

    }

    const classValue = {
        subject: req.body.subject,
        cost: req.body.cost
    }

    const classScheduleValues = req.body.weekday.map((weekday, index) => {
        return {
            weekday,
            time_from: convertHoursToMinutes(req.body.time_from[index]),
            time_to: convertHoursToMinutes(req.body.time_to[index])
        }
    })

    try {
        const db = await Database
        await createProffy(db, { proffyValue, classValue, classScheduleValues })
        let queryString = "?subject=" + req.body.subject
        queryString += "&weekday=" + req.body.weekday[0]
        queryString += "&time=" + req.body.time_from[0]

        return res.redirect("/study" + queryString)
    } catch (error) {
        console.log(error)
    }

    // ANTES DO SAVECLASSES: 
    // const data = req.body //res.body ao invés do req.query para que os dados não fiquem a mostrar na barra de navegação
    // const isNotEmpty = Object.keys(data).length > 0

    // if (isNotEmpty) {
    //     data.subject = getSubject(data.subject)
    //     proffys.push(data)
    //     return res.redirect("/study")
    // }
}
module.exports = {
        pageLanding,
        pageStudy,
        pageGiveClasses,
        saveClasses
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