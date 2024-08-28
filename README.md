# Study-WebApp Installation Instructions

On this page:

- [Study-WebApp Installation Instructions](#study-webapp-installation-instructions)
- [General Start-up Instructions](#general-start-up-instructions)
- [**mongo-db-backup**](#mongo-db-backup)
- [**study-buddy-api** and **tunnel-vision**](#study-buddy-api-and-tunnel-vision)
- [A Note on the Testing Procedures](#a-note-on-the-testing-procedures)

<br />


# General Start-up Instructions
After doing a `git pull` of the repo you may start the application using the `sudo docker compose up` command, but if this the first time running the command:

- **study-buddy-api** will fail to initiate the session storage collection in MongoDB

<br />


# **mongo-db-backup**

To back up the data do the following from within the mongodb container:
``` Shell Script
root@mongo-db$ mongodump -u Admin -p AdM1n --out=/backup/
root@mongo-db$ exit
```

<br />

# **study-buddy-api** and **tunnel-vision**

There are no special instructions for **study-buddy-api** and **tunnel-vision**. They will run smoothly when `sudo docker compose up` or `sudo docker compose up spirit-library tunnel-vision` is run. The container name for **study-buddy-api** is *spirit-library*.

# A Note on the Testing Procedures
For the back-end, unit tests were run for the validators using Jest, and API tests were run using Postman.  Included in this repo is the Postman API collection used, a fully automated test suite (when run using the collection runner).

For the front-end, unit tests were run for all compoenents and pure functions using Jest, and end-to-end testing for the app was conducted using Cypress.
