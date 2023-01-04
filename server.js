const express = require('express');
const mysql = require('mysql');
const path = require('path');


const app = express();


const conn = mysql.createConnection({ // setting connection to mysql
    host: '127.0.0.1',
    user: 'Ecommerce',
    password: 'nylah04240',
    database: 'Ecommerce'
}); 

conn.connect((err) => { // Connecting to mysql
    if(err){
        console.log(`can't connect to db`);
        console.log(err.errno);
        return; 
    }
    console.log(`connection to db worked`);
})

app.get('/api/products', (req, res) =>{
    if (!conn) res.send([]); // if mysql does not connect, it will send nothing.

    conn.query("SELECT * FROM products2", (err, results) =>{ // it will send this if mysql does connect.
        if (err) {
            console.log(err)
        } else {
            res.send(results)
        }
    });
});

app.use(express.static(path.join(__dirname, "./build"))); // middleware that makes the build folder static.

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "./build", "index.html")); // server will use this file as launch page which will be the index.html within the build folder.
});

const port = 4000; // port it will run on.
app.listen(port, () => {  // starts server on this port.
    console.log(`console listening on ${port}`);
});
