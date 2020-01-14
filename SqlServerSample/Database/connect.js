var Connection = require('tedious').Connection;
var config = {
    user: 'sa',
    password: 'sadbuttrue',
    server: 'DESKTOP-VPL2CH7',
    driver: 'tedious',
    database: 'nodeSample',
    port:1444,
    options: {
        instanceName: 'sql'
    }
};
var connection = new Connection(config);
connection.on('connect', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected');
    }
});
module.exports = connection;