import express from 'express'

import { createUser, getUserInfo, getUserById, deleteUser, modifyUser } from '../controllers/users.js'

const router = express.Router() // request types

//let users = [ // Mock database !!!

/*   {
        name: "John",
        lastName: "Doe",
        age: 25
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 24
    }
*/
//]

router.get('/', getUserInfo)

router.post('/', createUser)

router.get('/:id', getUserById) // /users/2 => req.params { id: 2}

router.delete('/:id', deleteUser)

router.patch('/:id', modifyUser)// put, patch, if you want to modify something

export default router;

// 1. change
// 2. change
// 3. change
// 4. change