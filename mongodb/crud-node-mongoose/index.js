const mongoose = require('mongoose');
const http = require('http');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isActive: Boolean
});

const User = mongoose.model('User', userSchema);

const username = process.env.username
const password = process.env.password
const database = process.env.database

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.o4qj7ip.mongodb.net/${database}`)
    .then(() => console.log('Mongo connection successful'))
    .catch((err) => { console.log(err) })

const server = http.createServer(async (req, res) => {
    const [_, route, id] = req.url.split('/');
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', async () => {
        if (route === 'users') {
            if (req.method === 'GET') {
                if (id) {
                    const user = await User.findById(id);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(user));
                } else {
                    const users = await User.find();
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(users));
                }
            } else if (req.method === 'POST') {
                const data = JSON.parse(body);
                const newUser = new User(data);
                await newUser.save();
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(newUser));
            } else if (req.method === 'PUT' && id) {
                const data = JSON.parse(body);
                const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(updatedUser));
            } else if (req.method === 'DELETE' && id) {
                await User.findByIdAndDelete(id);
                res.writeHead(204);
                res.end();
            } else {
                res.writeHead(404);
                res.end('Not Found');
            }
        } else {
            res.writeHead(404);
            res.end('Not Found');
        }
    });
});

server.listen(4000, () => {
    console.log('Server running at 4000');
});