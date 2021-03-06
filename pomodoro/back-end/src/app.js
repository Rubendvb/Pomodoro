const express = require("express")
const cors = require("cors")
const app = express()

// ==> Rotas da API
const index = require("./routes/index")

const taskRoute = require("./routes/tasks.routes")

app.use(express.urlencoded({ extended : true }))
app.use(express.json())
app.use(express.json({ type : "aplication/vnd.api+json" }))
app.use(cors())
app.use(index)
app.use("/api/", taskRoute)

module.exports = app;