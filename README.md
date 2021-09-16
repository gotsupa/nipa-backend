# SIMPLE SUPPORT TICKET MANAGEMENT

RESTful API to provide a simple helpdesk support ticket management using NodeJS and NoSQL Database (MongoDB).

## Installation

Use npm package to install node modules and all dependencies.

```bash
npm install
```

## Running the program

Running

```bash
npm run dev
```

Testing

```bash
npm run test
```

## ticket structure

- **title** => String
- **description** => String
- **contact_info** => String (probably be a mobile phone number)
- **status** => String (pedding, accepted, resolved, rejected)
- **createdAt** => Automatically created by MongoDB database
- **updatedAt** => Automatically created by MongoDB database

## API function

Use postman to fire api.

### 1. Create new ticket

Use POST Method and use _\'url: localhost:3000/tickets\'_
and provide the JSON body.

{
"title": "Waking Up",
"description": "test6",
"contact_info": "126",
"status": "pending"
}

### 2. Get all tickets

Use GET Method and use _\'url: localhost:3000/tickets\'_

### 3. Get the ticket by id

Use GET Method and use _\'url: localhost:3000/tickets:id\'_

### 4. Get and filter/sort tickets

Use GET Method and use _\'url: localhost:3000/tickets?sortBy=updatedAt:desc (for filtered by status url: localhost:3000/tickets?filterBy=status:pending)\'_

### 5. Update the ticket

Use PATCH Method and use _\'url: localhost:3000/tickets:id\'_
and provide the specific key in JSON body such as

{
"status": "accepted"
}

Wheter the keys provided are not matched in the ticket structure, there will occur an error.

### 6. Delete the ticket

Once the ticket have been created. It could not be deleted. If you try to delete the ticket, there will occur an error.
