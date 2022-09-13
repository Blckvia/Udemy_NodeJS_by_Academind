const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method
    if (url === '/') {
        res.write('<html>')
        res.write('<head><title> Friendly page! </title><head>')
        res.write('<body><h2>Hello Dear Friends! :)</h2></body>')
        res.write('<body><form action="/create-user" method="POST"><input type ="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>')
        return res.end();
    };
    if (url === '/users') {
        res.write('<html>')
        res.write('<ul><li>Numbiko</li></ul>')
        res.write('<ul><li>Secondbiko</li></ul>')
        res.write('<ul><li>Thirdbiko</li></ul>')
        res.write('<ul><li>Forthbiko</li></ul>')
        res.write('</html>')
    };
    if (url === '/create-user' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(username);
            res.statusCode = 302
            res.setHeader('Location', '/users');
            return res.end();
        });
    };
};

module.exports = requestHandler;