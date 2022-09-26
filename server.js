const express = require('express')
const randomRoutes = require('./routes/random.route')

const app = express()
app.use('/api/randoms', randomRoutes)

app.get('/', (req, res) => {
    console.log('INFO', process.pid);
    res.send('OK')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`);
})


