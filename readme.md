# Final project ISDI CODERS:

# Festival Marketplace App

This is a full-stack application (mobile-only) that allows users to create, update, and delete festivals on a marketplace platform.

<img width="901" alt="Captura de pantalla 2023-07-07 a las 19 56 01" src="https://github.com/Ari-F90/FestivApp-front/assets/115626747/76732936-ebb0-4cd5-88ea-eb71e5c50e4d">

## Technologies Used

The app uses the following technologies:

- Front-end:

  - React
  - Redux
  - Typescript
  - SASS

- Back-end:

  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - JWT

## Getting started

To run the app locally, follow these steps:

- Clone this repository to your local machine.
- Install the dependencies using npm install in both the root directory and the client directory.
- Set up the environment variables by creating a .env file in the root directory and adding the following variables:
  - MONGODB_URI - the URI for your MongoDB database.
  - JWT_SECRET - a secret string to use for JWT authentication.
- Run the command "npm install" to install all the required dependencies.
- Start the app using "npm start". This will start both the back-end server and the front-end development server.

## Functionality

The app allows users to:

- View a list of all festivals on the marketplace.
- Create a new festival with a name, type of music, city, country, dates, capacity and the user's name who created it.
- Edit an existing festival's details.
- Delete a festival from the marketplace.
- For the edit and delete actions, there are some user authorizations to allow these functions only to the creator user.

All CRUD actions are performed via API calls to the back-end server.

## Future enhancements

Some potential future enhancements to the app could include:

- Improving the search/filter feature to allow users to search for festivals by dates or location.
- Adding the ability for users to add their favorite festivals to their profile.

## Endpoints

### USERS:

GET ➡️ .../users

- Get all the data of all the registered users.

POST ➡️ .../users/register

- Register a user. The required fields will be the name, surname, email and password.

POST ➡️ .../users/login

- Login with an existing user. The required fields will be the email and the password.

### FESTIVALS:

GET ➡️ .../festivals

- Get all the data of the festivals (name, image, type of music, city, country, dates, capacity and the user who has created it).

GET ➡️ .../musicType/:musicTypeFilter

- Get all the festivals with the same type of music filtered.

POST ➡️ .../festivals

- Create a festival with all the data required.

PATCH ➡️ .../festivals/edit/:id

- Edit a festival.
  This action can only be done by its creator.

DEL ➡️ .../festivals/:id

- Delete a note. This action can only be done by its creator.

## Other interesting and related links

- Figma: https://www.figma.com/file/wPPX3DpDS6TvigasW2bNVR/Untitled?node-id=0-1&t=ot77FgU900dFJjwt-0
- Netlify:
  https://ariadna-frias-final-project-front.netlify.app/
- Sonar:
  https://sonarcloud.io/summary/overall?id=isdi-coders-2023_Ariadna-Frias-Final-Project-back-202301-mad

  https://sonarcloud.io/summary/overall?id=isdi-coders-2023_Ariadna-Frias-Final-Project-front-202301-mad
