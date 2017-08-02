/* Initialize and refresh social media database */

SET FOREIGN_KEY_CHECKS = 0;


drop table if exists social_media_db.Users;
drop table if exists social_media_db.Convos;
drop table if exists social_media_db.Comment_Feeds;


Create Table Users (
	id int AUTO_INCREMENT PRIMARY KEY,
	name varchar(50),
	passwrd varchar(50)
);

Create Table Convos (
	id int AUTO_INCREMENT PRIMARY KEY,
	creator_id int,
	title varchar(50),
	create_date Date,
	comment_feed_dir varchar(255),
	Foreign Key (creator_id) References Users(id) 
);

/*
Create Table Comment_Feeds (
	id int Not Null Unique,
    creator_id int,
    content varchar(2000),
    Primary Key (id)
);
*/