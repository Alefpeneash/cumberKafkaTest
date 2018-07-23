const KafkaTools = require('../lib/kafkaTools.js');

class ProducerConsumer{

    constructor(){
        this.kafkaTools = new KafkaTools("topic2");
        this.offset;
    }

    async sendMessage(message){
        let promise = await new Promise((resolve, reject) => {
            this.kafkaTools.producerOn(message);
            resolve();
        });
        return promise;
    }

    //promise way fetchFunc
    fetchMessage(){
        let promise = new Promise((resolve, reject) => {
            this.kafkaTools.consumerOn((message) => {
                resolve(message.value);
            });
        });

        return promise;
    }

    // callback way fetchFunc
    // async fetchMessage(cb){
    //     let promise = await new Promise((resolve, reject) => {
    //         let arr = [],
    //         i = 0;
    //         this.kafkaTools.consumerOn((message) => {
    //             arr[i] = message.value;
    //             i++;
    //             resolve(arr);
    //             // return arr;
    //         });
    //     });

    //     let result  =  promise[promise.length - 1];
    //     return cb(result);
    // }

    // async fetchMessage(){
    //     let promise = await new Promise((resolve, reject) => {
    //         let arr = [],
    //         i = 0;
    //         this.kafkaTools.consumerOn((message) => {
    //             arr[i] = message.value;
    //             i++;
    //             resolve(arr);
    //             // return arr;
    //         });
    //     });

    //     let result  =  promise[promise.length - 1];
    //     console.log(typeof (result));
    //     return result;
    // }
    
}

module.exports = ProducerConsumer;