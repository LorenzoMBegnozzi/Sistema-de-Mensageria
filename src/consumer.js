const amqp = require('amqplib');

async function consumeQueue() {
    try {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();
        const queue = 'tasks';

        await channel.assertQueue(queue, { durable: true });
        console.log('[*] Waiting for messages in %s. To exit press CTRL+C', queue);

        channel.consume(queue, (msg) => {
            if (msg !== null) {
                console.log(`[x] Received ${msg.content.toString()}`);
                channel.ack(msg);
            }
        });
    } catch (error) {
        console.error('Error in consumer:', error);
    }
}

consumeQueue();
