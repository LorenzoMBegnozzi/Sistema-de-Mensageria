const express = require('express');
const { sendToQueue } = require('./producer');

const app = express();
app.use(express.json());

app.post('/send', async (req, res) => {
    const { message } = req.body;
    await sendToQueue(message);
    res.send(`Mensagem '${message}' enviada para a fila!`);
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
