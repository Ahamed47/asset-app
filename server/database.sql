CREATE DATABASE assert_proj;

CREATE TABLE users(
  user_id uuid DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY(user_id)
);


CREATE TABLE admins(
  user_id uuid DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY(user_id)
);

CREATE TABLE asset(
  product_id BIGSERIAL NOT NULL,
  product VARCHAR(255) NOT NULL PRIMARY KEY,
  category VARCHAR(255) NOT NULL,
  quantity INTEGER NOT NULL,
  price FLOAT8 NOT NULL,
  totalprice FLOAT8 NOT NULL); 

CREATE TABLE request(
  product_id BIGSERIAL NOT NULL,
  product VARCHAR(255) NOT NULL PRIMARY KEY,
  category VARCHAR(255) NOT NULL,
  quantity INTEGER NOT NULL);

