const amqp = require('amqplib');

async function receiveMessage() {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    const queue = 'task_queue';

    await channel.assertQueue(queue, { durable: true });
    console.log(`Waiting for messages in ${queue}. To exit press CTRL+C`);

    channel.consume(queue, (msg) => {
        if (msg !== null) {
            console.log(`Received: ${msg.content.toString()}`);
            channel.ack(msg);
        }
    });
}

receiveMessage().catch(console.error);
