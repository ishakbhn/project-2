CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	name TEXT,
	username TEXT,
	password TEXT
);

CREATE TABLE IF NOT EXISTS places (
	id SERIAL PRIMARY KEY,
	place_name TEXT,
	img_url TEXT,
	address TEXT,
	amenities TEXT,
	open_hours TEXT,
	areas_id INT
);

CREATE TABLE IF NOT EXISTS areas (
	id SERIAL PRIMARY KEY,
	area TEXT
);