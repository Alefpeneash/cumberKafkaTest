const KafkaTools = require('../lib/kafkaTools.js');

class ProducerConsumer{

    constructor(topicName){
        this.kafkaTools = new KafkaTools(topicName);
        this.offset;
    }

    async sendMessage(message){
        let promise = await new Promise((resolve, reject) => {
            this.kafkaTools.producerOn(message);
            resolve();
        });
        return promise;
    }

    fetchMessage(num){
        let promise = new Promise((resolve, reject) => {
            let a = [];
            let i = 0;
            this.kafkaTools.consumerOn(num, (message) => {
                a[i] = message.value;
                i++;
                resolve(a);
            });
        });
        return promise;
    }    
}

module.exports = ProducerConsumer;