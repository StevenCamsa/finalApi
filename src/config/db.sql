
CREATE TABLE admin (
    admin_id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    username VARCHAR (200),
    password VARCHAR(64),
    status CHAR(10)

);


INSERT INTO admin(name, username, password, status)
VALUES ( 'admin','admin','1234','active');

CREATE TABLE artist (
    artist_id SERIAL PRIMARY KEY,
    artist_name VARCHAR(200),
    artist_img TEXT,
    status CHAR(10)
);

INSERT INTO artist(artist_name, artist_img,status)
VALUES ('artist 1','/upload/picture' ,'active');

INSERT INTO artist(artist_name, artist_img,status)
VALUES ('artist 2', '/upload/picture' ,'active');


CREATE TABLE album (
    album_id SERIAL PRIMARY KEY,
    album_name VARCHAR(200),
    artist_id INT,
    album_img TEXT,
    status CHAR(10),

    FOREIGN KEY (artist_id) REFERENCES artist(artist_id)
);

INSERT INTO album(album_name,artist_id, album_img, status)
VALUES ('album','1', '/upload/picture','active');
INSERT INTO album(album_name,artist_id, album_img, status)
VALUES ('album2','1', '/upload/picture','active');


CREATE TABLE track (
    track_id SERIAL PRIMARY KEY,
    track_name VARCHAR(200),
    artist_id INT,
    album_id INT,
    track_img TEXT,
    track_mp3 TEXT,
    songDuration INT,
    time TIMESTAMP,
    numberofplays INT,
    status CHAR(10),

    FOREIGN KEY (artist_id) REFERENCES artist(artist_id),
    FOREIGN KEY (album_id) REFERENCES album(album_id) 
);

INSERT INTO track(track_name, artist_id, album_id, track_img, track_mp3, songDuration, time,  numberofplays, status)
VALUES ('track','2', '2','/upload/picture', '/upload/picture','30',NOW(),'2','active')
