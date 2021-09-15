import mongoose from 'mongoose'
import Ticket from '../../src/models/ticket'

const ticketOneId = new mongoose.Types.ObjectId()
const ticketOne = {
  _id: ticketOneId,
  title: 'Testing1',
  description: 'from test 1',
  contact_info: '1',
  status: 'pending',
}

const ticketTwoId = new mongoose.Types.ObjectId()
const ticketTwo = {
  _id: ticketTwoId,
  title: 'Testing2',
  description: 'from test 2',
  contact_info: '2',
  status: 'accepted',
}

const ticketThreeId = new mongoose.Types.ObjectId()
const ticketThree = {
  _id: ticketThreeId,
  title: 'Testing3',
  description: 'from test 3',
  contact_info: '3',
  status: 'resolved',
}

const ticketFourId = new mongoose.Types.ObjectId()
const ticketFour = {
  _id: ticketFourId,
  title: 'Testing4',
  description: 'from test 4',
  contact_info: '4',
  status: 'rejected',
}

const addTicket = {
  title: 'Add Testing',
  description: 'from add test',
  contact_info: '999',
  status: 'rejected',
}

const setupDatabase = async () => {
  await Ticket.deleteMany()
  await new Ticket(ticketOne).save()
  await new Ticket(ticketTwo).save()
  await new Ticket(ticketThree).save()
  await new Ticket(ticketFour).save()
}

export { addTicket, ticketOneId, setupDatabase }
