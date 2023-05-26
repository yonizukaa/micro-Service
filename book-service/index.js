import express from 'express'
import { bookService } from './routes/book-service.js'


const app = express()
app.use(express.json())
const port = 4400

app.get('/get', async (req,res) => {
    res.send(JSON.stringify(await bookService.getAllBooks()));
})

app.get('/get/:id', async (req,res) => {
    res.send(JSON.stringify(await bookService.getBooksById(req.params.id)));
})

app.put('/update/:id', async(req,res) => {
    req.body.id = req.params.id;
    res.send(JSON.stringify(await bookService.updateBooks(req.body)));

})

app.post('/create', async(req,res) => {
    let createdBook = await bookService.createBook(req.body);
    res.send(JSON.stringify(createdBook));
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})