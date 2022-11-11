const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getSomething, getInspiration, beKind, getAllGoals, createGoal, deleteGoal } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.get("/api/something", getSomething)
app.get("/api/inspire", getInspiration)
app.get("/api/kind", beKind)
app.get("/api/goals", getAllGoals)
app.post("/api/goals", createGoal)
app.delete("/api/goals/:id", deleteGoal)

app.listen(4000, () => console.log("Server running on 4000"));
