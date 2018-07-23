
const { Before, Given, When, Then } = require('cucumber');
const assert = require('assert');
const ProducerConsumer = require('../lib/producerConsumer');

let pc; 

Given('the producer and consumer', () =>  {
    pc = new ProducerConsumer(); 
}); 

// When('the producer sends message {string}', function (message) {
//     // return pc.sendMessage(message);
// });

Then('the consumer fetches message {string} {string}',  function(message, expected) {
    let check = true; 
    for (let index = 0; index < 2; index++) {
        // pc.sendMessage(message);
        // return pc.fetchMessage().then((res) => {
        //     return assert.equal(expected, res);
        // });   
        let a = Math.floor(Math.random() * 10) % 2;
        console.log(a);  
        if (a == 1){
            check = false;
            break;
        } 
    }
    assert(check);
});

//callback way 
// Then('the consumer fetches message {string}', function (expected, callback) {
//     pc.fetchMessage((res) => {
//         assert.equal(expected, res); 
//         callback();
//     });
// });

// promise way
// setTimeout(() => {process.exit(0);}, 1000);