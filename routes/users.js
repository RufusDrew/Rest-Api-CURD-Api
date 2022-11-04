import express  from "express";
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();

let users = []

router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {
   const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the name ${user.FirstName} added to the Database`);


});

router.get('/:id', (req, res) => {
   const { id } = req.params;

   const foundUser = users.find((user) => user.id === id);

   res.send(foundUser);
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted fro the Database`)
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;

    const { FirstName, LastName, Age } = req.body;

    const user = users.find((user) => user.id == id);

    if(FirstName) user.FirstName = FirstName;
    if(LastName) user.LastName = LastName;
    if(Age) user.Age = Age;

    res.send(`user with the id ${id} is updated`);


});

export default router;