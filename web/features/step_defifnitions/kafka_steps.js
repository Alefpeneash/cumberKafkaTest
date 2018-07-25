const { Before, Given, When, Then } = require('cucumber');
const assert = require('assert');
const ProducerConsumer = require('../lib/producerConsumer');

let pc; 

Given('the producer and consumer at the topic - {string}', (topicName) =>  {
    pc = new ProducerConsumer(topicName); 
}); 

Then('The producer sends {int} messages {string} and consumer fetches {int} messages {string}',  function(num, message, num2, expected) {
    let promise = new Promise(function (resolve, reject) {
        for (let index = 0; index < num; index++) {
            pc.sendMessage(message);
        }
        resolve(pc.fetchMessage(num).then((res) => {
            for (let j = 0; j < num; j++) {
                if(res[j] != expected){
                    check = false;
                    return assert.equal(res[j], expected)
                }
                if(j == num - 1){
                    return assert(true);
                }
            }
        }));
    });
    return promise;
});