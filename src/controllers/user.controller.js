let users = [
    {
        id: 1,
        name: "Savia"
    }
];

const getUsers = (req, res) => {
    res.status(200).json(users);
}

const createUser = (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(201).json({
        message: "Usuario creado exitosamente",
        user: newUser
    });
}


module.exports = {
    getUsers,
    createUser
}



