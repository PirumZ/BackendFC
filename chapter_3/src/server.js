import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/authRoutes.js'

const app = express()
const PORT  = process.env.PORT || 5000

// Get file path from the URL of the current module
const __filename = fileURLToPath(import.meta.url)
// Get the directory name from the file path
const __dirname = dirname(__filename)

// MIddleware
app.use(express.json())

// Serves the HTML from the /public directory, also telling express to serve
// all files from the folder as static assets

app.use(express.static(path.join(__dirname, "../public")))

// Servingg up the HTML from the /public directory
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


// Routes
app.use('/auth', authRoutes)

app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`)
})
