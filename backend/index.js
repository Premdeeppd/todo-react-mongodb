const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
const { todo } = require("./db");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Post request to create a new todo
app.post("/todos", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "you sent the wrong input",
    });
    return;
  }

  // Write database logic
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo has been created",
  });
});

// Get request to fetch all todos

app.get("/todo", async (req, res) => {
  const todos = await todo.find({});
  res.json({ todos });
});

// Put request to mark a todo as completed

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "you sent the wrong input",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
