const express = require('express')
const app = express()
app.use(express.static('Publik'))
app.use(express.json())
const port = 3000

app.get('/api/message', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/message', function (req, res, next) {
    req.body
    res.send(req.body)
    next()
  })

  
   
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})