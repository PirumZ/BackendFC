const express = require('express');
const app = express();
const PORT = 8383;

let data = ["nick"]


// Middleware
app.use(express.json())


// Website endpoints

app.get('/', (req, res) => {
    res.send(`
            <body style="background:pink;
            color: blue;">
            <h1>DATA:</h1>
                <p>${JSON.stringify
                 (data)} </p>
                 <a href="/dashboard">Dashboard</a>
            </body>
        `)

})
app.get('/dashboard', (req, res) => {
    res.send(`
        <body>
        <h1>dashboard</h1>
        <a href="/">Home<a/>
        </body>
        `)
})


// API endpoints

// crud-method create-post read-get
// update-put delete-delete

app.get('/api/data', (req, res) => {
    console.log('This one was for data')
    res.status(201).res.send(data)
})

app.post('/api/data', (req, res) => {
    // wants to create for user, like when using a sign up button

    // user clicks sign up button after entering creds, and the
    // broswer is wired to send a net request to the server
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
})

app.delete('/api/data', (req, res) => {
    data.pop()
    console.log('We deleted the element off of the end of the array')
    res.sendStatus(203)
})


app.listen(PORT, () => console.log(`Server has started on: ${PORT}`));