const kafka = require('kafka-node');

class KafkaTools{

    constructor(topicName){
        this.topicName = topicName;
        this.Producer = kafka.Producer;
        this.Consumer = kafka.Consumer;
        // this.client = new kafka.Client();
        // this.client = new kafka.KafkaClient({kafkaHost: '0.0.0.0:9092'});
        this.client = new kafka.Client("192.168.0.1:2181")
        this.producer = new this.Producer(this.client);
        this.offset = 0;
    }

    async offsetCounter(cb){
        this.offsets = new kafka.Offset(this.client);
        let promise = await new Promise((resolve, reject) => {
            this.offsets.fetch([
                { topic: this.topicName, partition: 0, time: -1}
            ], (err, data) => {
                this.offset = data[this.topicName]['0'] - 1;
                resolve(this.offset)
            });
        }); 

        return promise;
    }

    producerOn(message){
        this.payloads = [{topic: this.topicName, messages: message, partition: 0}];
        this.producer.on('ready', () => {
            this.producer.send(this.payloads, (err, data) => {
            });
        });

        
    }

    consumerOn(callback){        
        this.offsetCounter().then((r) => {
            this.consumer = new this.Consumer(
                this.client,
                [{topic: this.topicName, offset: this.offset, partition: 0 }],
                    {autoCommit: false, fromOffset: true}
                );
                this.consumer.on('message', callback);    
        });    
    }

}

module.exports = KafkaTools;
