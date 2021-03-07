const Database = require('./database/db')

const { subjects, weekdays, getSubject, convertHoursToMinutes } = require('./utils/format')

function pageLanding(req, res) {
    return res.render("index.html")
}

async function pageStudy(req, res) {
    const filters = req.query

    if (!filters.subject || !filters.weekday || !filters.time) {
        return res.render("study.njk", { filters, subjects, weekdays })
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
        return res.render("study.njk", { proffys, filters, subjects, weekdays })
    } catch (error) {
        console.log(error)
    }
}

function pageGiveClasses(req, res) {
    const data = req.query //res.body ao invés do req.query para que os dados não fiquem a mostrar na barra de navegação
    const isNotEmpty = Object.keys(data).length > 0

    if (isNotEmpty) {
        data.subject = getSubject(data.subject)
        proffys.push(data)
        return res.redirect("/study")
    } else {
        return res.render("give-classes.njk", { subjects, weekdays })
    }
}

module.exports = {
        pageLanding,
        pageStudy,
        pageGiveClasses
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