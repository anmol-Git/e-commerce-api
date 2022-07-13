const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

mongoose.connect('mongodb+srv://anmolsharma:aA123456@cluster0.f1rg8zm.mongodb.net/ecommerce?retryWrites=true&w=majority')
    .then(function() {

        app.get("/", function(req,res) {
            res.send("Ecommerce Setup"); 
        })


        const userRoutes = require('./routes/user_routes');

        app.use('/api/user',userRoutes);

        const productRoutes = require("./routes/product_routes");
        
        app.use('/api/product',productRoutes);

        const categoryRoutes = require("./routes/category_routes");
        
        app.use('/api/category',categoryRoutes);
        
    })

const port = 5000;
app.listen(port, function() {
    console.log(`Server started at PORT: ${port}`);
})