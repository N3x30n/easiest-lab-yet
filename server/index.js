const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/api/users', (req,res) => {
    let friends = ['Nitin', 'Eric', 'Jeddy', 'Cameron', 'Riely']
    res.status(200).send(friends)
})

app.get('/weather/:temperature', (req,res) => {
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`
    res.status(200).send(phrase)
})

// app.get("/weather/:temperature", (req, res) => {
//     const { temperature } = req.params;
//     const phrase = `<h3>It was ${temperature} today</h3>`;
//     res.status(200).send(phrase);
//   });

app.listen(4000, () => console.log('Server is running on prt 4000 :P'))