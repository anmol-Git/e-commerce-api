const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(express.static('uploads'));

mongoose.connect('enter your Auth string url')
    .then(function() {

        app.get("/", function(req,res) {
            res.send("Ecommerce Setup"); 
        })


        const userRoutes = require('./routes/user_routes');

        const productRoutes = require("./routes/product_routes");

        const categoryRoutes = require("./routes/category_routes");

        const fileRoutes = require("./routes/file_routes");

        
        
        app.use('/api/user',userRoutes);
  
        app.use('/api/product',productRoutes);
               
        app.use('/api/category',categoryRoutes);
        
        app.use('/api/file',fileRoutes);
        
    })

const port = 5000;
app.listen(port, function() {
    console.log(`Server started at PORT: ${port}`);
})