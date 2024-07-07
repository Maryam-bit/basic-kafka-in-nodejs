const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
    brokers: ["172.25.165.32:9092"],
    clientId: "my-app"
});