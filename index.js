const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', (req, res) => { res.send('index.html') });

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

const fs = require("fs");
const pg = require("pg");

const config = {
    connectionString:
        "postgres://user1:user1234@rc1b-pby5o0fi1pf1al93.mdb.yandexcloud.net:6432/db1",
    ssl: {
        rejectUnauthorized: true,
        ca: fs
            .readFileSync("/home/kainev/.postgresql/root.crt")
            .toString(),
    },
};

const conn = new pg.Client(config);

conn.connect((err) => {
    if (err) throw err;
});
conn.query("SELECT version()", (err, q) => {
    if (err) throw err;
    console.log(q.rows[0]);
    conn.end();
});