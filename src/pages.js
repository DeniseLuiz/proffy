const Database = require('./database/db')

const { subjects, weekdays, getSubject } = require('./utils/format')

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query

    if (!filters.subject || !filters.weekday || !filters.time) {
        return res.render("study.njk", { filters, subjects, weekdays })
    }


    const query = `
        SELECT classes.*, proffys.*                             
        FROM proffys 
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE EXISTS(
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekday}
            AND class_schedule.time_from <= ${filters.time}
            AND class_schedule.time_to > ${filters.time}
        )
    `



}

function pageGiveClasses(req, res) {
    const data = req.query
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