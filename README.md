# SIMPLE SUPPORT TICKET MANAGEMENT

---

RESTful API to provide a simple helpdesk support ticket management using NodeJS and NoSQL Database (MongoDB).

## Installation

---

use npm package to install node modules and dependencies.

```bash
npm install
```

## ticket structure

---

**title** => String
**description** => String
**contact_info** => String
**status** => String (pedding, accepted, resolved, rejected)
**createdAt** => Automatically created by MongoDB database
**updatedAt** => Automatically created by MongoDB database

## API function

---

use postman to fire api.

### 1. create new ticket

---

use POST Method and use url: localhost:3000/tickets
and provide the JSON body.

{
"title": "Waking Up",
"description": "test6",
"contact_info": "126",
"status": "pending"
}

### 2. get all tickets

---

use GET Method and use url: localhost:3000/tickets

### 3. get the ticket by id

---

use GET Method and use url: localhost:3000/tickets:id

### 4. get and filter/sort tickets

---

use GET Method and use url: localhost:3000/tickets?sortBy=updatedAt:desc (for filtered by stats url: localhost:3000/tickets?filterBy=status:pending)

### 5. update the ticket

---

use PATCH Method and use url: localhost:3000/tickets:id
and provide the specific key in JSON body such as

{
"status": "accepted"
}

Wheter the keys provided are not matched in ticket structure, there will occur an error.

### 6. delete the ticket

---

Once the ticket have been created. It could not be deleted. If you try to delete the ticket, there will occure an error.
