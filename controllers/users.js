import { v4 as uuidv4 } from 'uuid'

export let users = []

export const getUserInfo = (req, res) => {
    res.send(users)
}

export const createUser = (req, res) => {
    const user = req.body

    users.push({...user, id: uuidv4() })

    res.send(`User with the name ${user.firstName} added to the database!`)
}

export const getUserById = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id)

    res.send(req.params)
}

export const deleteUser = (req, res) => {
    const { id } = req.params

    users = users.filter((user) => user.id !== id)

    res.send(`User with the id ${id} deleted from the database.`)
}

export const modifyUser = (req, res) => {
    const { id } = req.params
    const { firstName, lastName, age} = req.body

    const user = users.find((user) => user.id == id)

    if(firstName) {
        user.firstName = firstName
    }

    if(lastName) {
        user.lastName = lastName
    }

    if(age) {
        user.age = age
    }

    res.send('User data updated')

}