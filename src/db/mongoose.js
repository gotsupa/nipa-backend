import mongoose from 'mongoose'

const MONGODB_URL = process.env.MONGODB_URL

// const db = mongoose.connect(MONGODB_URL, {
//   // useCreateIndex: true,
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

const conn = mongoose.createConnection(MONGODB_URL)

export default conn
