# Requirement 1
## USER STORY
As a logged-out user, I want to see a welcome page with a form to enter my login information.

## ACCEPTANCE CRITERIA
 + The welcome page will consist of a welcome message and a web form.
 + When the user logs-in with the correct credentials, they are re-directed to the home page.
 If the user enters the wrong credentials, they are shown an error message and are told to try again.

## TECHNICAL SOLUTION
### Back-end
+ Credential validation done using database values.
+ The password given is compared to its encrypted equivalent found in the database.
+ The email address entered is also validated.

### Front-end
+ A web form with input validation sends data to the back-end for more validation.
+ A successful login returns a session variable that is stored on the FE and is sent for every API call

### Testing
+ BE (Jest) unit tests for validation logic
+ BE (Jest) integration tests for database connectivity
+ Postman API automated tests for the BE's endpoints (**Spike Required**)
- FE (Jest) unit tests for input validation.
+ FE (Cypress) e-to-e testing for the feature (**Spike Required**)

### Extra Configuration
+ Docker container setup for DB, API and React app
+ BE set-up to use Express JS
+ FE set-up to receive API calls from the BE