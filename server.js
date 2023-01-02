const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const path = require('path');


const app = express();

const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'Ecommerce',
    password: 'nylah04240',
    database: 'Ecommerce'
});

conn.connect((err) => {
    if(err){
        console.log(`can't connect to db`);
        console.log(err.errno);
        return; 
    }
    console.log(`connection worked`);
})

app.use(cors());

app.use(express.json());

app.get('/api/products', (req, res) =>{
    if (!conn) res.send([]);

    conn.query("SELECT * FROM productlist", (err, results) =>{
        if (err) {
            console.log(err)
        } else {
            res.send(results)
        }
    });
});

app.use(express.static(path.join(__dirname, "./build")));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "./build", "index.html"));
});

const port = 4000;
app.listen(port, () => { 
    console.log(`console listening on ${port}`);
});
