const net = require('net');
const users = require('./models/Users');

const server = net.createServer((socket) => {
	socket.write("Comienza el proceso");
    
    socket.on("data", async data => {
        const dataJson = await JSON.parse(data.toString('utf8'))
        switch(dataJson.model) {
            case 'users':
                const resp = await users(dataJson);
                socket.write(JSON.stringify(resp));
                break;
        } 
    });
});

server.listen(52275, () => { console.log("Server connect") });