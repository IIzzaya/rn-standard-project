let DEBUG = true;

let protocol = "http";
let domain = "120.78.145.36";
let port = 3000;
let server;

if (DEBUG) {
    protocol = "http";
    domain = "127.0.0.1";
    port = 3000;
}

server = `${protocol}://${domain}:${port}/api`;
domain =  `${protocol}://${domain}`;

export {
    domain,
    server
};
