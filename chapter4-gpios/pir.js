var Gpio = require('onoff').Gpio,
	sensor = new Gpio(17, 'in', 'both'),
	interval;
	
sensor.watch(function (err, value) {
	if (err) exit(err);
	console.log(value? 'there is some one!' : 'not anymore!');
});

interval = setInterval(function () {
	var value = sensor.readSync();
	console.log('sensor value is ' + value);
}, 2000);

function exit(err) {
	if (err)	console.log('An error occured: ' + err);
	clearInterval(interval);
	sensor.unexport();
	console.log('Bye, bye!');
	process.exit();
}

process.on('SIGINT', exit);