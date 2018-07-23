const express = require('express');
const kafka = require('kafka-node');
const testPage = require('./config/testPage.js');
const HOST = '0.0.0.0';
const PORT = 8080;
const app = express();

let _offset;
let Producer = kafka.Producer,
    KeyedMessage = kafka.KeyedMessage,
    Offset = kafka.Offset,
    client = new kafka.Client("192.168.0.1:2181"),
    // client = new kafka.KafkaClient({kafkaHost: '0.0.0.0:9092'}),
    producer = new Producer(client),
    km = new KeyedMessage('key', 'message');
    payloads = [
        { topic: 'topic2', partition: 0, messages: ['hello'] }
    ]; 
let l =  producer.on('ready', function () {
    producer.send(payloads, function (err, data) {
        console.log(data['topic2']['0']);
    });
});

offset = new Offset(client);
offset.fetch([{ topic: "topic2", partition: 0, time: -1}], (err, data) => {
    console.log(data['topic2']['0']);
});


let Consumer = kafka.Consumer;
let consumer = new Consumer(
    client,
    [{topic: 'topic2', offset: _offset, partition: 0}],
    {autoCommit: false, fromOffset: true}
);



consumer.on('message', (message) => {
    console.log('offset: ' + message.offset + ', value: ' + message.value);

});

consumer.pause();

consumer.fetch();

offset = new kafka.Offset(client);
// offset.fetch([
//     { topic: 'topic2', partition: 0, time: Date.now(), maxNum: 2 }
// ], function (err, data) {
//     // console.log(data);
//     // data;
// });

offset.fetchLatestOffsets(['topic2'], function (error, offsets) {
    if (error)
        return handleError(error);
    console.log(offsets['topic2'][0]);
});

app.get('/', (req, res) => {
    // let hostname = process.env.HOSTNAME;
    res.send('Hello.');
});

app.get('/testPage', (req, res) => {
    let path = require('path');
    // let promise = new Promise ((res, rej) => {
    //     testPage();
    // });
    // testPage().then((r) => {
    //     res.sendFile(path.resolve() + '/features/reports/reports.html');
    // });
    testPage();
    res.sendFile(path.resolve() + '/features/reports/reports.html');
});


app.listen(PORT, HOST);
console.log('Running on http://' + HOST + ':' + PORT);




