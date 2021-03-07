const { subjects, weekdays, getSubject } = require('./utils/format')

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.njk", { proffys, filters, subjects, weekdays })
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