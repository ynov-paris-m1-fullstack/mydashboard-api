CREATE DATABASE mydashboard
CREATE USER myUser WITH PASSWORD 'myPassword'
GRANT ALL PRIVILEGES ON DATABASE mydashboard TO myUser
ALTER USER myUser CREATEDB
check if my database is created => \l
____

DATABASE_URL=postgres://myUser:myPassword@localhost:5432/mydashboard