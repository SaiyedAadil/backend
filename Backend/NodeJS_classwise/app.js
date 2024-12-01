import express from "express";
import productsRouter from "./routes/productsRoute.js";
const app = express();

// Middleware to parse JSON data in request body
app.use(express.json());



app.use("/products", productsRouter);

// Example data (in-memory store, to simulate a database)
let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
];
// GET route to fetch all users
app.get("/users", (req, res) => {
    res.json(users);
});

// GET route to fetch a single user by ID
app.get("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);

    if (!user) {
        return res.status(404).send("User not found");
    }

    res.json(user);
});

// POST route to create a new user
app.post("/users", (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1; // Simulate ID generation
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT route to update an existing user by ID
app.put("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex((u) => u.id === userId);

    if (userIndex === -1) {
        return res.status(404).send("User not found");
    }

    const updatedUser = req.body;
    users[userIndex] = { ...users[userIndex], ...updatedUser };
    res.json(users[userIndex]);
});

// DELETE route to delete a user by ID
app.delete("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex((u) => u.id === userId);

    if (userIndex === -1) {
        return res.status(404).send("User not found");
    }

    users.splice(userIndex, 1); // Remove the user from the array
    res.status(204).send(); // No content response
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
