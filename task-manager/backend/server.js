import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build a project", completed: false }
];

// Get all tasks
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// Add new task
app.post("/api/tasks", (req, res) => {
  const newTask = { id: Date.now(), text: req.body.text, completed: false };
  tasks.push(newTask);
  res.json(newTask);
});

// Toggle complete
app.put("/api/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (task) {
    task.completed = !task.completed;
    res.json(task);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

// Delete task
app.delete("/api/tasks/:id", (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.json({ message: "Task deleted" });
});

app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));
