var Gpio = require('onoff').Gpio,
	sensor = new Gpio(17, 'in', 'both');
	
sensor.watch(function (err, value) {
	if (err) exit(err);
	console.log(value? 'there is some one!' : 'not anymore!');
});

function exit(err) {
	if (err)	console.log('An error occured: ' + err);
	sensor.unexport();
	console.log('Bye, bye!');
	process.exit();
}

process.on('SIGINT', exit);