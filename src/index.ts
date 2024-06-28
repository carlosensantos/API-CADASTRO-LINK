import express from 'express'
import 'dotenv/config'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    return res.json("tudo certo")
})

app.listen(process.env.PORT, () => {
    console.log('servidor iniciado')
})