const http = require('http');


const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.setHeader('Content-Type', 'text/plane');
        res.statusCode = 200;
        res.end(`<h1>Welcome to Men & Women Dummy Data</h1>`)
    }

    else if (req.url === "/men") {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(JSON.stringify(getMenProducts()));
    }

    else if (req.url === "/women") {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(JSON.stringify(getWomenProducts()));
    }
})

function getMenProducts() {
    let menProducts = []
    for (let i = 1; i < 11; i++) {
        menProducts.push({
            id: i,
            title: `Product-${i}`,
            price: 10 * i
        })
    }
    return menProducts
}

function getWomenProducts() {
    let womenProducts = []
    for (let i = 1; i < 11; i++) {
        womenProducts.push({
            id: i,
            title: `Product-${i}`,
            price: 10 * i
        })
    }
    return womenProducts
}

const PORT = 3000;
const LOCAL_HOST = "localhost"

server.listen(PORT, () => {
    console.log(`Server is running on http://${LOCAL_HOST}:${PORT}`);
})