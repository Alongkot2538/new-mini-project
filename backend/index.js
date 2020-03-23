let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let app = express();
app.use(cors());

// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let books = [{'id':0,'name':'percy','cost': 300,'status':'true'},
   {'id':1, 'name':'harry','cost': 350,'status':'true'}
];

// router.route('/books').get((req, res) =>  res.json(books) );
router.route('/books')
   // get all books
   .get( (req, res) =>  res.json(books) ) 

   // insert a new book
   .post( (req, res)=> {
       var book = {};
       book.id =  books[books.length-1].id+1;
       book.name = req.body.name
       book.cost = req.body.cost
       book.status = req.body.status
       books.push(book);
       res.json( {message: 'Book created!'} )
   })

//param
router.route('/books/:book_id')
   .get ( (req,res) => {
        let id = req.params.book_id
        let index = books.findIndex( book => (book.id === +id) )
        res.json(books[index])                   // get a book
    })  

    .put ( (req,res) => {                               // Update a book
        let id = req.params.book_id
        let index = books.findIndex( book => (book.id === +id) )
        books[index].name = req.body.name;   
        books[index].cost = req.body.cost;   
        books[index].status = req.body.status;   
        res.json({ message: 'Book updated!' + req.params.book_id});
    })

    .delete ( (req,res) => {                   // Delete a book
        let id = req.params.book_id
        let index = books.findIndex( book => book.id === +id  )
        books.splice(index,1) 
        res.json({ message: 'Book deleted: ' + req.params.book_id});
    })
 
 




app.use("*", (req,res) => res.status(404).send('404 Not found') );
app.listen(process.env.PORT || 80 ,  () => console.log("Server is running") )