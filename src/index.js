import app from './app.js'

const PORT = process.env.PORT

// listener
app.listen(PORT, () => console.log(`Server is up on port ${PORT}`))
