var http = require('http'),
    httpProxy = require('http-proxy'),
    static = require('node-static');

var proxy = httpProxy.createProxyServer(
    {changeOrigin: true}
);
proxy.on('proxyReq', function (proxyReq, req, res, options) {
    proxyReq.setHeader('Accept-Encoding', 'gzip, deflate, sdch');
    proxyReq.setHeader('user-agent', 'Mozilla/5.0(Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36');
    proxyReq.setHeader('accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8');
});
var server = http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    proxy.web(req, res, {
        target: 'http://api.meetup.com'
    });
});
console.log("Proxy server listening on port 8000");
server.listen(8000);

var file = new static.Server('./www');

function stringStartsWith(string, prefix) {
    return string.slice(0, prefix.length) == prefix;
}
require('http').createServer(function (request, response) {
    if('/logo.png' == request.url) {
        request.addListener('end', function () {
            file.serveFile('meetup.png', 200, {}, request, response);
        }).resume();
	} else {
        request.addListener('end', function () {
            file.serveFile('index.html', 200, {}, request, response);
        }).resume();
	}
}).listen(8080);
console.log("Http server listening on port 8080");