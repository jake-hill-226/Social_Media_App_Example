const mysql = require('mysql');
const fs = require('fs');

var con = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "password",
  database: "social_media_db",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  // Initialize DB Tables
  queryDB(con, readFile('db_init.sql').toString());
  
  con.end();
});

function addUser(name, password){
	var sql = "Insert Into Users (name, passwrd) Values ('" + name + "', '" + password + "');"
	queryDB(con,sql);
}

function createConvo(user_id_nbr, title){
	var sql = "Insert Into Convos (creator_id, title, create_date, comment_feed_dir)"
			+ "Values ( " + user_id_nbr + ", " + title + ", (Select CURDATE), " + "./comment_feeds" + title + " );";
}

// Submit any generic MySQL Query
function queryDB(connection, sql_query){
	var query_result = '';

	connection.query(sql_query, function(err, result){
		if(err) throw err;
		console.log("Query Complete");
		query_result = result;
	});

	return query_result;
}

function readFile(fileDir){
	return fs.readFileSync(fileDir);
}