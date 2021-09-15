import request from 'supertest'
import app from '../src/app.js'
import Ticket from '../src/models/ticket.js'
import db from '../src/db/mongoose.js'
import mongoose from 'mongoose'
import { addTicket, ticketOneId, setupDatabase } from './fixtures/db.js'

beforeEach(setupDatabase)

afterAll(async () => {
  await Ticket.deleteMany()
  await db.dropDatabase()
  await mongoose.disconnect()
})

test('Should get all tickets', async () => {
  const response = await request(app).get('/tickets').send().expect(200)
  expect(response.body.length).toEqual(4)
})

test('Should get ticket by id', async () => {
  await request(app).get(`/tickets/${ticketOneId}`).send().expect(200)
  const ticket = await Ticket.findById(ticketOneId)
  expect(ticket).not.toBeNull()
})

// post the ticket first and expect the http status code
// get that ticket by id and not to be null or count the ticket's number (+1 from the new ticket)
test('Should post a ticket', async () => {
  const response = await request(app)
    .post('/tickets')
    .send(addTicket)
    .expect(201)
  const ticket = await Ticket.findById(response.body._id)
  expect(ticket).not.toBeNull()
})

test('Should failed to update', async () => {
  await request(app)
    .patch(`/tickets/${ticketOneId}`)
    .send({
      name: 'Soy',
    })
    .expect(400)
})

test('Should update a ticket', async () => {
  await request(app)
    .patch(`/tickets/${ticketOneId}`)
    .send({
      status: 'rejected',
    })
    .expect(200)
  const ticket = await Ticket.findById(ticketOneId)
  expect(ticket.status).toEqual('rejected')
})

test('Should filter a ticket', async () => {
  const response = await request(app)
    .get('/tickets?filterBy=status:rejected')
    .send()
    .expect(200)
  expect(response.body.length).toEqual(1)
})

test('Should not delete ticket', async () => {
  await request(app).delete(`/tickets/${ticketOneId}`).send().expect(405)
  const ticket = await Ticket.findById(ticketOneId)
  expect(ticket).not.toBeNull()
})
