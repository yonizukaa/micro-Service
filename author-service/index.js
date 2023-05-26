import express from 'express'
import { authorService } from './routes/authors-service.js'


const app = express()
const port = 4500
app.use(express.json());
app.get('/get', async (req,res) => {
    res.send(JSON.stringify(authorService.getAllAuthor()));
})

app.post('/get/multiple',async (req,res) => {
    res.send(JSON.stringify(authorService.getAuthorsByIds(req.body)));
})

app.get('/get/:id', async (req,res) => {
    res.send(JSON.stringify(authorService.getAuthorById(req.params.id)));
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})