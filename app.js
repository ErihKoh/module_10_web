const express = require('express');
const exhbs = require('express-handlebars');
const products = require('./products.json');

const PORT = process.env.PORT || 4444



const app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.engine('hbs',
    exhbs({
    extname: 'hbs',
}));


app.get('/', (req, res) => {
    // console.log('Это колбек для app.get("/")');
    // console.log(req.url);
     res.render('home', {pageTitle: 'Главная'});
});
app.get('/about', (req, res) => {
    // console.log('Это колбек для app.get("/about")');
    // console.log(req.url);
    res.render('about', { cssFileName: 'about', pageTitle: 'О нас'  });
});

app.get('/products', (req, res) => {
    
    res.render('products', { products, cssFileName: 'products', pageTitle: 'Наши товары' });
});

app.get('/products/:productId', (req, res) => {
    console.log(req.params);

    const product = products.find(p => p.id === req.params.productId);

    res.render('product', {product})
})


app.listen(4444, () => {
    console.log(`Application server is running on port ${4444}`);
});