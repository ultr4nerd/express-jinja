const express = require('express');
const jinja2 = require('./express-jinja2')

const app = express();

app.engine('j2', jinja2);
app.set('views', './views');
app.set('view engine', 'j2');

app.get('/', (req, res) => {
    res.render('index', {message: 'Hello world', engine: 'Jinja 2'});
});

const server = app.listen(3000, () => {
    const port = server.address().port;
    console.log(`Listening on http://127.0.0.1:${port}`);
})