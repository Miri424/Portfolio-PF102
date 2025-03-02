const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, '../db/index.json')); 
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get('/products', (req, res) => {
    const db = router.db;
    const products = db.get('products').value();

    if (products && products.length > 0) {
        res.json(products);
    } else {
        res.status(404).json({ message: 'Heç bir məhsul tapilmadi' });
    }
    
});

server.get('/product/:id', (req, res) => {
    const productId = Number(req.params.id);
    const db = router.db;
    const product = db.get('products').find({ id: productId }).value();

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Məhsul tapilmadi' });
    }
});

server.delete('/product/:id', (req, res) => {
    const productId = Number(req.params.id);
    const db = router.db;

    const product = db.get('products').find({ id: productId }).value();

    if (product) {
        db.get('products').remove({ id: productId }).write();
        res.json({ message: 'Məhsul silindi' });
    } else {
        res.status(404).json({ message: 'Məhsul tapilmadi' });
    }
});

server.use(router);

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
