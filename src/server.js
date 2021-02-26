require('express')()
    .get('/', (req, res) => {
        return res.send("Hi from NLW")
    })
    .get('/study', () => {
        return res.send('Page study')
    })
    .listen(5500)