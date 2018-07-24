const { Before, Given, When, Then } = require('cucumber');
const assert = require('assert');
const ProducerConsumer = require('../lib/producerConsumer');

let pc; 

Given('the producer and consumer', () =>  {
    pc = new ProducerConsumer(); 
}); 

Then('The producer sends {int} messages {string} and consumer fetches {int} messages {string}',  function(num, message, num2, expected) {
    let promise = new Promise(function (resolve, reject) {
        let check = true;
        let a;
        for (let index = 0; index <= num; index++) {
            pc.sendMessage(message);
            a = Math.floor(Math.random() * 10);
            pc.fetchMessage().then((res) => {
                if ((a % 2) == 1){
                    check = false;
                }
            }).then(() => {console.log(index + " | " + a + " | " + check);});
            // if(index == num){
            //     resolve(check);
            // }
            resolve();
        }
    });
    return promise;
    // return promise.then((check) => {
    //     return assert(check);
    // });
});


// Then('The producer sends {int} messages {string} and consumer fetches {int} messages {string}',  function(num, message, num2, expected) {
//     let promise = new Promise(function (resolve, reject) {
//         let check = true;
//         for (let index = 0; index <= num; index++) {
//             pc.sendMessage(message);
//             pc.fetchMessage().then((res) => {
//                 if(res != expected){
//                     check = false;
//                     // return assert(false);
//                 }
//             });
//             console.log(index);
//             // if(index == num){
//             //     resolve(check);
//             // }
//         }
//     });
//     // return promise;
//     return promise.then((check) => {
//         return assert(check);
//     });
// });








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