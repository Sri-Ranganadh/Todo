const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const rootRouter = require('./routes/index')

const PORT = 4000
const app = express()

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use("/api/v1",rootRouter)



app.listen(PORT,()=>console.log(`listening to PORT : ${PORT}`))

