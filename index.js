import express from 'express'
import 'dotenv/config'

const port = process.env.port

const app = express()

app.get ('/', (request, response) => {
    return response.send('Bienvenue dans mon API')
})//on veux lire la donnée

app.get('/users', (req,res)=> {
    return res.send(`Salut utilisateurs`)
})


app.listen({port}, () => console.log(`Server is running on port ${port}`)) //on veux écouter un port, le 3 000