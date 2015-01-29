
var crypto 		= require('crypto');
var MongoDB 	= require('mongodb').Db;
var Server 		= require('mongodb').Server;
var moment 		= require('moment');

var dbPort 		= 27017;
var dbHost 		= 'localhost';
var dbName 		= 'lessonplans';

/* establish the database connection */

var db = new MongoDB(dbName, new Server(dbHost, dbPort, {auto_reconnect: true}), {w: 1});
	db.open(function(e, d){
	if (e) {
		console.log(e);
	}	else{
		console.log('connected to database :: ' + dbName);
	}
});
var admins = db.collection('admins');

/* login validation methods */

exports.autoAdminLogin = function(user, pass, callback)
{
	admins.findOne({adminuser:adminuser}, function(e, o) {
		if (o){
			o.adminpass == adminpass ? callback(o) : callback(null);
		}	else{
			callback(null);
		}
	});
}

exports.manualAdminLogin = function(user, pass, callback)
{
	admins.findOne({adminuser:adminuser}, function(e, o) {
		if (o == null){
			callback('user-not-found');
		}	else{
			validateAdminPassword(adminpass, o.adminpass, function(err, res) {
				if (res){
					callback(null, o);
				}	else{
					callback('invalid-password');
				}
			});
		}
	});
}

/* record insertion, update & deletion methods */

exports.addNewAdminAccount = function(newData, callback)
{
	admins.findOne({adminuser:newData.adminuser}, function(e, o) {
		if (o){
			callback('username-taken');
		}	else{
			admins.findOne({adminemail:newData.adminemail}, function(e, o) {
				if (o){
					callback('email-taken');
				}	else{
					saltAndHash(newData.adminpass, function(hash){
						newData.adminpass = hash;
					// append date stamp when record was created //
						newData.date = moment().format('MMMM Do YYYY, h:mm:ss a');
						admins.insert(newData, {safe: true}, callback);
					});
				}
			});
		}
	});
}

exports.updateAdminAccount = function(newData, callback)
{
	admins.findOne({adminuser:newData.adminuser}, function(e, o){
		o.adminname 		= newData.adminname;
		o.adminemail 	= newData.adminemail;
		if (newData.adminpass == ''){
			admins.save(o, {safe: true}, function(err) {
				if (err) callback(err);
				else callback(null, o);
			});
		}	else{
			saltAndHash(newData.adminpass, function(hash){
				o.adminpass = hash;
				admins.save(o, {safe: true}, function(err) {
					if (err) callback(err);
					else callback(null, o);
				});
			});
		}
	});
}

exports.updateAdminPassword = function(email, newPass, callback)
{
	admins.findOne({adminemail:adminemail}, function(e, o){
		if (e){
			callback(e, null);
		}	else{
			saltAndHash(newPass, function(hash){
		        o.adminpass = hash;
		        admins.save(o, {safe: true}, callback);
			});
		}
	});
}

/* account lookup methods */

exports.deleteAdminAccount = function(id, callback)
{
	admins.remove({_id: getObjectId(id)}, callback);
}

exports.getAdminAccountByEmail = function(email, callback)
{
	admins.findOne({adminemail:adminemail}, function(e, o){ callback(o); });
}

exports.validateAdminResetLink = function(email, passHash, callback)
{
	admins.find({ $and: [{adminemail:adminemail, adminpass:passHash}] }, function(e, o){
		callback(o ? 'ok' : null);
	});
}

exports.getAllAdminRecords = function(callback)
{
	admins.find().toArray(
		function(e, res) {
		if (e) callback(e)
		else callback(null, res)
	});
};

exports.delAllAdminRecords = function(callback)
{
	admins.remove({}, callback); // reset admins collection for testing //
}

/* private encryption & validation methods */

var generateSalt = function()
{
	var set = '0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ';
	var salt = '';
	for (var i = 0; i < 10; i++) {
		var p = Math.floor(Math.random() * set.length);
		salt += set[p];
	}
	return salt;
}

var md5 = function(str) {
	return crypto.createHash('md5').update(str).digest('hex');
}

var saltAndHash = function(pass, callback)
{
	var salt = generateSalt();
	callback(salt + md5(pass + salt));
}

var validateAdminPassword = function(plainPass, hashedPass, callback)
{
	var salt = hashedPass.substr(0, 10);
	var validHash = salt + md5(plainPass + salt);
	callback(null, hashedPass === validHash);
}

/* auxiliary methods */

var getObjectId = function(id)
{
	return admins.db.bson_serializer.ObjectID.createFromHexString(id)
}

var findById = function(id, callback)
{
	admins.findOne({_id: getObjectId(id)},
		function(e, res) {
		if (e) callback(e)
		else callback(null, res)
	});
};


var findByMultipleFields = function(a, callback)
{
// this takes an array of name/val pairs to search against {fieldName : 'value'} //
	admins.find( { $or : a } ).toArray(
		function(e, results) {
		if (e) callback(e)
		else callback(null, results)
	});
}
