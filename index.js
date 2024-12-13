import 'dotenv/config'
import express from 'express'
 
const app = express();

app.get('/', (req, res) => {
    res.send('HELLO WORLD') ;
})

app.get('/twt', (req, res) => {
    res.send('TWITTER') ;
}) 

app.get('/login', (req, res) => {
    res.send('<h1>LOGIN Karo</h1>') ;
})

const PORT = process.env.PORT ;
app.listen(PORT, () => {
    console.log(`Server is running at: ${PORT}`)
})