# Study-Webapp Installation Instructions

On this page:

1. [mongo-db-backup](#mongo-db-backup)
2. [study-buddy-api](#study-buddy-api)
3. (WIP for FE isntructions)

After doing a `git pull` of the repo :

## For **mongo-db-backup** {#mongo-db-backup}

- run

``` Shell Script
$# docker-compose up mongo-db
$# docker exec -it mongo-db bash
root@mongo-db$ mongorestore /backup
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

## For **study-buddy-api** {#study-buddy-api}

- If you want to run ***study-buddy-api*** outside of the dockker container, navigate to the folder from the command line and run:

``` Shell Script
npm install
```

Simple as that!
