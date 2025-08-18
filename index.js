const express = require('express');
const app = express();
const productRoutes = require('./routes/product.route');

app.use('/myapi', productRoutes);
app.use('/files', express.static('myfiles'));
app.listen(4200, (e)=>{
  console.log('the server is currently running on port 4200');
});