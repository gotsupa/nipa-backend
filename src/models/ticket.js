import mongoose from 'mongoose'
const { Schema } = mongoose
import conn from '../db/mongoose.js'

const ticketSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    contact_info: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
)

const Ticket = conn.model('Ticket', ticketSchema)

export default Ticket
