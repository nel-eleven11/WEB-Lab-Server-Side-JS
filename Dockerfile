# mysql image
FROM mysql:latest

# Environment variables
ENV MYSQL_DATABASE=blog_nelson
ENV MYSQL_ROOT_PASSWORD=admin
# User and password for the database
ENV MYSQL_USER=nelson
ENV MYSQL_PASSWORD=admin

# Copy the schema.sql file to the docker-entrypoint-initdb.d directory
COPY schema.sql /docker-entrypoint-initdb.d/schema.sql

# Expose the port 3306
EXPOSE 3306