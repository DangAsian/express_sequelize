createdb psync
psql

CREATE USER psync_user;


ALTER ROLE test_user SET client_encoding TO 'utf8';
ALTER ROLE test_user SET default_transaction_isolation TO 'read committed';
ALTER ROLE test_user SET timezone TO 'UTC';
ALTER USER test_user WITH PASSWORD '12345';
ALTER USER test_user CREATEDB;
ALTER USER test_user SUPERUSER;

GRANT ALL PRIVILEGES ON DATABASE psql_sequelize TO test_user;
