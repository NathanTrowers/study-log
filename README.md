# Study-Webapp Installation Instructions

On this page:

1. [General Instructions](#General-Instructions)
2. [mongo-db-backup](#mongo-db-backup)
3. [study-buddy-api](#study-buddy-api-and-tunnel-vision)

<br />


# General-Instructions
After doing a `git pull` of the repo you may start the application using the `sudo docker compose up` command, but the database will be empty if this is your first time running the command.

<br />


# **mongo-db-backup**

### Instructions for setting the repository databse as the container's database

``` Shell Script
$# docker-compose up mongo-db
$# docker exec -it mongo-db bash
root@mongo-db$ mongorestore -u Admin -p AdM1n /backup
```

Check that the collections have been updated with:

``` MongoDB
root@mongo-db$ mongo
> show dbs
```

`StudyLog` should appear as one of the databases listed.

You may now exit the mongo shell and the docker container it is in with the following:

``` Shell Script
> exit
root@mongo-db$ exit
```

To back up the data do the following from within the mongodb container:
``` Shell Script
root@mongo-db$ mongodump -u Admin -p AdM1n --out=/backup/
root@mongo-db$ exit
```

<br />

# **study-buddy-api** and **tunnel-vision**

There are no special installation instructions for **study-buddy-api** and **tunnel-vision**. They will run smoothly when `sudo docker compose up` or `sudo docker compose up spirit-library tunnel-vision` is run. The container name for **study-buddy-api** is *spirit-library*.
