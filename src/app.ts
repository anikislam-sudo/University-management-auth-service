import express, { Application, Request, Response, urlencoded } from "express"
import cors from "cors";
const app:Application = express()
const port = 3000

app.use(cors())
//parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/', (req:Request, res:Response) => {
  res.send('server is working')
})

export default app;