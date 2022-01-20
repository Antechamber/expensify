const express = require('express')
const path = require('path')

// config
const app = express()
const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, '..', 'public')

// middleware
app.use(express.static(publicPath))

// fallback path (match all unmatched paths)
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

// listen at port
app.listen(port, () => {
    console.log(`App running on ${port}`)
})