const amqp = require('amqplib');

async function sendMessage(message) {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    const queue = 'task_queue';

    await channel.assertQueue(queue, { durable: true });
    channel.sendToQueue(queue, Buffer.from(message));

    console.log(`Sent: ${message}`);
    setTimeout(() => {
        connection.close();
        process.exit(0);
    }, 500);
}

const message = process.argv.slice(2).join(' ') || 'Hello RabbitMQ!';
sendMessage(message).catch(console.error);
