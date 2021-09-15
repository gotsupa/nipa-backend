import express from 'express'
import Ticket from '../models/ticket.js'

const router = new express.Router()

router.get('/', (req, res) => {
  res.send('Hello')
})

// Get all the tickets in the database, sorting, listing
// GET /tickets?sortBy=updatedAt:desc (asc)
// GET /tickets?filterBy=status:pending (pending, accepted, resolved, rejected)
router.get('/tickets', async (req, res) => {
  const sort = {}
  const filter = {}

  console.log('from ticketRouter.js file on line 17th', req.query.sortBy)

  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(':')
    sort[parts[0]] = parts[1]
  }

  if (req.query.filterBy) {
    const parts = req.query.filterBy.split(':')
    filter[parts[0]] = parts[1]
  }

  try {
    const ticket = await Ticket.find(filter).sort(sort).exec()
    res.send(ticket)
  } catch (e) {
    res.sendStatus(500).send(e)
  }
})

// Get the ticket by id
router.get('/tickets/:id', async (req, res) => {
  const id = req.params.id

  try {
    const ticket = await Ticket.findById(id)
    res.send(ticket)
  } catch (e) {
    res.status(404).send('Ticket not found!')
  }
})

// Save the ticket to the database
router.post('/tickets', async (req, res) => {
  const reqKeys = Object.keys(req.body)
  const allowedKeys = ['title', 'description', 'contact_info', 'status']

  const isValidKey = reqKeys.every((reqKey) => {
    return allowedKeys.includes(reqKey)
  })

  if (!isValidKey) {
    return res.status(400).send('Please Provide valid keys!')
  }

  const ticket = new Ticket(req.body)

  try {
    await ticket.save()
    res.status(201).send(ticket)
  } catch (e) {
    res.status(400).send(e)
  }
})

// Update the ticket in the database
router.patch('/tickets/:id', async (req, res) => {
  const id = req.params.id
  const reqKeys = Object.keys(req.body)
  const allowedKeys = ['title', 'description', 'contact_info', 'status']

  const isValidKey = reqKeys.every((reqKey) => {
    return allowedKeys.includes(reqKey)
  })

  if (!isValidKey) {
    return res.status(400).send('Please Provide valid keys!')
  }

  try {
    const ticket = await Ticket.findById(id)

    if (!ticket) {
      return res.status(404).send('Cannot find the ticket')
    }

    const updatedTicket = await Ticket.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    })

    await updatedTicket.save()
    res.send(updatedTicket)
  } catch (e) {
    res.status(400).send(e)
  }
})

export default router
