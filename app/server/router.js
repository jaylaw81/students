
var CT = require('./modules/country-list');
var AM = require('./modules/account-manager');
var EM = require('./modules/email-dispatcher');
var GitHubApi = require("github");

var github = new GitHubApi({
	// required
	version: "3.0.0",
	// optional
	debug: true,
	protocol: "https",
	host: "api.github.com",

	timeout: 5000,
	headers: {
		"user-agent": "My-Cool-GitHub-App", // GitHub is happy with a unique user agent
	}
});

function getDateTime() {

	var date = new Date();

	var hour = date.getHours();
	hour = (hour < 10 ? "0" : "") + hour;

	var min  = date.getMinutes();
	min = (min < 10 ? "0" : "") + min;

	var sec  = date.getSeconds();
	sec = (sec < 10 ? "0" : "") + sec;

	var year = date.getFullYear();

	var month = date.getMonth() + 1;
	month = (month < 10 ? "0" : "") + month;

	var day  = date.getDate();
	day = (day < 10 ? "0" : "") + day;

	return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;

}


module.exports = function(app) {

// main login page //

	var navLinks = [
	  { label: 'HTML', key: 'html', path: '/thebasics/html' },
	  { label: 'CSS', key: 'css', path: '/thebasics/css' },
	  { label: 'JS', key: 'js', path: '/thebasics/javascript' }
	]

	app.get('/', function(req, res){
	// check if the user's credentials are saved in a cookie //
		if (req.cookies.user == undefined || req.cookies.pass == undefined){
			res.render('partials/login', { title: 'Hello - Please Login To Your Account' });
		}	else{
	// attempt automatic login //
			AM.autoLogin(req.cookies.user, req.cookies.pass, function(o){
				if (o != null){
					req.session.user = o;
					res.redirect('/home');
				}	else{
					res.render('partials/login', { title: 'Hello - Please Login To Your Account' });
				}
			});
		}
	});

	app.post('/', function(req, res){
		AM.manualLogin(req.param('user'), req.param('pass'), function(e, o){
			if (!o){
				res.send(e, 400);
			}	else{
				req.session.user = o;
				if (req.param('remember-me') == 'true'){
					res.cookie('user', o.user, { maxAge: 900000 });
					res.cookie('pass', o.pass, { maxAge: 900000 });
				}
				res.send(o, 200);
			}
		});
	});

// logged-in user homepage //

	app.get('/home', function(req, res) {
		if (req.session.user == null){
		// if user is not logged-in redirect back to login page //
			res.redirect('/');

		} else {

			res.render('home', {
				title : 'Home',
				section: 'home',
				navLinks: navLinks,
				udata : req.session.user,
				userStyle: ''
			});

		}
	});

	app.get('/series/:series', function(req, res) {

		var series = req.params.series;

		if (series == null){
			res.redirect('/home');
		} else {
			res.redirect(series + '/home');
			series: series
		}
	});



	app.get('/:series/html', function(req, res) {

		var series = req.params.series;

		if (req.session.user == null){
		// if user is not logged-in redirect back to login page //
			res.redirect('/');

		} else {

			res.render('series/'+series+'_html', {
				title : 'HTML',
				section: 'html',
				navLinks: navLinks,
				udata : req.session.user,
				userStyle: '',
				series: series
			});

		}
	});

	app.get('/:series/css', function(req, res) {

		var series = req.params.series;

		if (req.session.user == null){
		// if user is not logged-in redirect back to login page //
			res.redirect('/');

		} else {

			require('shelljs/global');
			var less = require('less');
			var fs = require('fs');
			var user = req.session.user.user;
			var file = req.body.file;

			cd(__dirname);

			cd('../../students/' + user + '/' + series + '/styles/');

			var filePath = pwd() + '/styles.css';

			fs.readFile(filePath, 'utf8', function(err, text){
				less.render('.display { '+text+' }', function (e, output) {
				  text = output.css;
				});
				res.render('series/'+series+'_css', {
					title : 'CSS',
					section: 'css',
					navLinks: navLinks,
					udata : req.session.user,
					userStyle: text,
					series: series
				});
			});

		}
	});

	app.get('/:series/javascript', function(req, res) {
		var series = req.params.series;

		if (req.session.user == null){
		// if user is not logged-in redirect back to login page //
			res.redirect('/');

		} else {

			require('shelljs/global');
			var less = require('less');
			var fs = require('fs');
			var user = req.session.user.user;
			var file = req.body.file;

			cd(__dirname);

			cd('../../students/' + user + '/' + series + '/styles/');

			var filePath = pwd() + '/styles.css';
			fs.readFile(filePath, 'utf8', function(err, text){
				less.render('.output { '+text+' }', function (e, output) {
				  text = output.css;
				});
				res.render('series/'+series+'_javascript', {
					title : 'Javascript',
					section: 'js',
					navLinks: navLinks,
					udata : req.session.user,
					userStyle: text,
					series: series
				});
			});

		}
	});

	app.get('/profile', function(req, res) {
		if (req.session.user == null){
		// if user is not logged-in redirect back to login page //
			res.redirect('/');

		} else {

			res.render('profile', {
				title : 'Profile',
				section: 'profile',
				navLinks: navLinks,
				udata : req.session.user,
				userStyle: ''
			});

		}
	});

	app.get('/badges', function(req, res) {
		if (req.session.user == null){
		// if user is not logged-in redirect back to login page //
			res.redirect('/');

		} else {

			res.render('badges', {
				title : 'Badges',
				section: 'badges',
				navLinks: navLinks,
				udata : req.session.user,
				userStyle: ''
			});

		}
	});

	app.get('/support', function(req, res) {
		if (req.session.user == null){
		// if user is not logged-in redirect back to login page //
			res.redirect('/');

		} else {

			res.render('support', {
				title : 'Support',
				section: 'support',
				navLinks: navLinks,
				udata : req.session.user,
				userStyle: ''
			});

		}
	});

	app.get('/account', function(req, res) {
		if (req.session.user == null){
		// if user is not logged-in redirect back to login page //
			res.redirect('/');

		} else {

			res.render('account', {
				title : 'Account',
				section: 'account',
				navLinks: navLinks,
				udata : req.session.user,
				userStyle: ''
			});

		}
	});

	app.get('/logout', function(req, res) {
		var user = req.session.user.user;

		require('shelljs/global');
		cd(__dirname);

		cd('../../students/');
		exec('rm -rf ' + user + '/');

		res.clearCookie('user');
		res.clearCookie('pass');
		req.session.destroy(function(e){
			res.redirect('/');
		});
	});

	app.post('/account', function(req, res){
		if (req.param('user') != undefined) {
			AM.updateAccount({
				user 		: req.param('user'),
				name 		: req.param('name'),
				email 		: req.param('email'),
				pass		: req.param('pass')
			}, function(e, o){
				if (e){
					res.send('error-updating-account', 400);
				}	else{
					req.session.user = o;
			// update the user's login cookies if they exists //
					if (req.cookies.user != undefined && req.cookies.pass != undefined){
						res.cookie('user', o.user, { maxAge: 900000 });
						res.cookie('pass', o.pass, { maxAge: 900000 });
					}
					res.send('ok', 200);
				}
			});
		}	else if (req.param('logout') == 'true'){
			res.clearCookie('user');
			res.clearCookie('pass');
			req.session.destroy(function(e){ res.send('ok', 200); });
		}
	});

// creating new accounts //

	app.get('/signup', function(req, res) {
		res.render('signup', {  title: 'Signup', countries : CT });
	});

	app.post('/signup', function(req, res){
		AM.addNewAccount({
			name 	: req.param('name'),
			email 	: req.param('email'),
			user 	: req.param('user'),
			pass	: req.param('pass'),
			//country : req.param('country')
		}, function(e){
			if (e){
				res.send(e, 400);
			}	else{
				res.send('ok', 200);
			}
		});
	});

// password reset //

	app.post('/lost-password', function(req, res){
	// look up the user's account via their email //
		AM.getAccountByEmail(req.param('email'), function(o){
			if (o){
				res.send('ok', 200);
				EM.dispatchResetPasswordLink(o, function(e, m){
				// this callback takes a moment to return //
				// should add an ajax loader to give user feedback //
					if (!e) {
					//	res.send('ok', 200);
					}	else{
						res.send('email-server-error', 400);
						for (k in e) console.log('error : ', k, e[k]);
					}
				});
			}	else{
				res.send('email-not-found', 400);
			}
		});
	});

	app.get('/reset-password', function(req, res) {
		var email = req.query["e"];
		var passH = req.query["p"];
		AM.validateResetLink(email, passH, function(e){
			if (e != 'ok'){
				res.redirect('/');
			} else{
	// save the user's email in a session instead of sending to the client //
				req.session.reset = { email:email, passHash:passH };
				res.render('reset', { title : 'Reset Password' });
			}
		})
	});

	app.post('/reset-password', function(req, res) {
		var nPass = req.param('pass');
	// retrieve the user's email from the session to lookup their account and reset password //
		var email = req.session.reset.email;
	// destory the session immediately after retrieving the stored email //
		req.session.destroy();
		AM.updatePassword(email, nPass, function(e, o){
			if (o){
				res.send('ok', 200);
			}	else{
				res.send('unable to update password', 400);
			}
		})
	});

// view & delete accounts //

	app.get('/print', function(req, res) {
		AM.getAllRecords( function(e, accounts){
			res.render('print', { title : 'Account List', accts : accounts });
		})
	});

	app.post('/delete', function(req, res){
		AM.deleteAccount(req.body.id, function(e, obj){
			if (!e){
				res.clearCookie('user');
				res.clearCookie('pass');
				req.session.destroy(function(e){ res.send('ok', 200); });
			}	else{
				res.send('record not found', 400);
			}
		});
	});

	app.get('/reset', function(req, res) {
		AM.delAllRecords(function(){
			res.redirect('/print');
		});
	});

	app.post('/github', function(req, res){

		var appRes = res;
		var query = req;

		var user = query.session.user.user;

		var shaHex = require('crypto').randomBytes(20).toString('hex');

		github.authenticate({
			type: "basic",
			username: "rhinocoders",
			password: "nitrocoders2014"
		});


		github.gitdata.getReference({
			"user": "rhinocoders",
			"repo": "students",
			"ref": "heads/" + user
		}, function(err, res){

			if(err){
				appRes.redirect('/createBranch');
			} else {
				appRes.redirect('/checkout');
			}

		});
	});

	app.get('/createBranch', function(req, res){

		var appRes = res;
		var query = req;

		var user = query.session.user.user;

		var shaHex = require('crypto').randomBytes(20).toString('hex');

		github.authenticate({
			type: "basic",
			username: "rhinocoders",
			password: "nitrocoders2014"
		});

		github.gitdata.createReference({
			"user": "rhinocoders",
			"repo": "students",
			"ref": "refs/heads/" + user,
			"sha": "f0e772f9b57b232f44a9b7ec7022728d2b9d860f"
		}, function(err, res){
			//console.log('createReference');
			appRes.redirect('/checkout');
		});
	});

	app.get('/checkout', function(req, res){
		var user = req.session.user.user;

		require('shelljs/global');
		cd(__dirname);

		cd('../../students/');
		mkdir('-p', user);
		exec('sudo chmod 777 ' + user + '/');
		cd( user );
		exec('git clone -b '+user+' https://github.com/rhinocoders/students.git .');

		//clone("git://github.com/rhinocoders/students", 'students/' + user, options);

		res.send('ok', 200);

	});

	app.get('/commit', function(req, res){

		var user = req.session.user.user;

		require('shelljs/global');
		cd(__dirname);

		cd('../../students/' + user);

		exec('git add -A');
		exec('git commit -m "Commit work for '+ user +' @ ' + getDateTime() + '"');
		exec('git remote set-url origin git@github.com:rhinocoders/students.git');
		exec('git push --set-upstream origin ' + user);
		exec('software');

		cd(__dirname);

		res.send('ok', 200);

	});

	app.post('/save', function(req, res){
		var user = req.session.user.user;
		var fs = require('fs');
		require('shelljs/global');

		var file = req.body.file;
		var series = req.body.series;
		var code = req.body.code;

		cd(__dirname);
		cd('../../students/' + user + '/' + series + '/');

		fs.truncate(file, 0);

		var fileName = file;
		var stream = fs.createWriteStream(fileName);

		stream.once('open', function(fd) {
		  stream.write(code);
		  stream.end();
		});

		res.send('ok', 200);

	});

	app.post('/readFile', function(req, res){
		require('shelljs/global');
		var fs = require('fs');

		var user = req.session.user.user;

		var file = req.body.file;
		var series = req.body.series;

		cd(__dirname);

		cd('../../students/' + user + '/' + series);

		var filePath = pwd() + '/' + file;
		//console.log(filePath);
		//console.log(pwd());


		fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
			if (!err){
			//console.log('received data: ' + data);
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			res.end();
			}else{
				//console.log(err);
			}

		});

	});

	app.get('/:series/home', function(req, res) {

		var series = req.params.series;
		var title = '';
		switch(series){
			case 'thebasics':
			title = 'The Basics';
			break;
		}

		if (req.session.user == null){
		// if user is not logged-in redirect back to login page //
			res.redirect('/');

		} else {

			res.render('series', {
				title : title + '| Home',
				section: 'home',
				navLinks: navLinks,
				udata : req.session.user,
				userStyle: '',
				header: title,
				series: series
			});

		}
	});

	app.get('*', function(req, res) { res.render('404', { title: 'Page Not Found'}); });

};

