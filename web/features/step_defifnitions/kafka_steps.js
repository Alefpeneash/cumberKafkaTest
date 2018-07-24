
const { Before, Given, When, Then } = require('cucumber');
const assert = require('assert');
const ProducerConsumer = require('../lib/producerConsumer');

let pc; 

Given('the producer and consumer', () =>  {
    pc = new ProducerConsumer(); 
}); 

Then('The producer sends {int} messages {string} and consumer fetches {int} messages {string}',  function(num, message, num2, expected) {
    let promise = new Promise((resolve, reject) => {
        for (let index = 0; index <= num; index++) {
            pc.sendMessage(message);
            resolve(pc.fetchMessage().then((res) => {
                return assert.equal(res, expected);
            }));

        }
    });
    return promise;
});








// When('the producer sends message {string}', function (message) {
//     // return pc.sendMessage(message);
// });

//callback way 
// Then('the consumer fetches message {string}', function (expected, callback) {
//     pc.fetchMessage((res) => {
//         assert.equal(expected, res); 
//         callback();
//     });
// });

// promise way
// setTimeout(() => {process.exit(0);}, 1000);