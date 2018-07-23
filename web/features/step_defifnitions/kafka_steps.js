
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
    let a;
    let promise = new Promise((resolve, reject) => {
        for (let index = 0; index < 2; index++) {
            pc.sendMessage(message);
            pc.fetchMessage().then((res) => {
                // assert.equal(expected, res);
            
                a = Math.floor(Math.random() * 10) % 2;
                console.log(a + "|");
                if (a == 1){
                    check = false;
                    // break;
                } 
                console.log("|" + check);
            });
            if(index == 1){
                resolve(check);                
            }
        }
    });
    
    promise.then((c) => {
        assert(c);
    });
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