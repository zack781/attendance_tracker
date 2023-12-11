var express = require('express');
var app = express();

const cors = require('cors');

const knexConfig = require('./db/knexfile');
const knex = require('knex')(knexConfig[process.env.NODE_ENV] || 'development');

app.use(cors({
    origin: '*'
}))

app.use(express.json());

app.get('/', (req, res) => {
    return res.json("Hello World!");
});

app.get('/get_attendance_table', (req, res) => {

    knex('attendance_table').select({
        date: 'date',
        first: 'first',
        middle: 'middle',
        last: 'last',
        showed_up: 'showed_up'
    }).then((data) => {
        console.log(data);
        return res.json(data);
    }).catch((err) => {
        console.error(err);
        return res.json({success: false, message: 'An error occurred, please try again later.'});
    })

});

app.post('/take_attendance', (req, res) => {
    console.log("req = ", req.body);
    const date = req.body.date;
    const first = req.body.first;
    const middle = req.body.middle;
    const last = req.body.last;
    const showed_up = req.body.showed_up;

    if (!first) {
        return res.json({success: false, message: 'Name is required'});
    }

    if (!showed_up){
        return res.json({success: false, message: 'Attendance status is required'});
    }

    knex('attendance_table').insert({date, first, middle, last, showed_up})
    .catch((err) => {
        console.error(err);
        return res.json({success: false, message: 'An error occurred, please try again later.'});
    });

    return res.json(res.body);

});

app.listen(8080, () => {
    console.log("Listening on port 8080!");
});