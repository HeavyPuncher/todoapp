// Sample in-memory todo data
let todos = [];

// Get all todos
exports.getAllTodos = (req, res) => {
  res.json(todos);
};

// Create a new todo
exports.createTodo = (req, res) => {
  const { title, comment } = req.body;
  const newTodo = { title, comment };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};