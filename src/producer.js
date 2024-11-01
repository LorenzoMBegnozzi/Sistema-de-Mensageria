const amqp = require('amqplib');

async function sendToQueue(message) {
    try {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();
        const queue = 'tasks';

        await channel.assertQueue(queue, { durable: true });
        channel.sendToQueue(queue, Buffer.from(message));

        console.log(`[x] Sent '${message}'`);
        setTimeout(() => {
            connection.close();
        }, 500);
    } catch (error) {
        console.error('Error in producer:', error);
    }
}

module.exports = { sendToQueue };
