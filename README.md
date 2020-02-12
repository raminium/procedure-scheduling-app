# Study Scheduling Application

## Introduction
Dear caresyntax team,

Thank you for this interesting technichal assignment. My Study Scheduling 
Application follows the idea of a scheduling system for the OR. Therefore 
the interface is built to make a daily schedule of procedure as easily comprehensible as possible.

Even though it was not asked for I already started enhancing the functionality
of the application slightly. I added the ability to add doctors and rooms as
well. There are some further ideas I want to implement like connecing rooms 
and doctors to procedures.

The requests have been mocked. Data is fetched from a local db.json file and
the rest of the requests are mocked. I've set up the Redux actions in a way
so that this functionality could be easily implemented. Requests for the different entities (Doctors, Patients, Rooms, Studies) are already seperated 
to make it possible to implement a backend without restructuring the project.

On the frontend I have utilized Material-UI as well as a few styled-components to make the development process as streamlined as possible.

For testing I have utilized `data-testid` attributes. These attributes will
be deleted once `npm run build` builds the production version.

## Technologies
- TypeScript
- React (create-react-app)
- Redux (Thunk)
- Material-UI
- Styled Components
- Jest, Enzyme, Testing Library

## Style Guide
- Airbnb JavaScript Style Guide

## Instructions
- `npm install` to install the needed packages.
- `npm start` to run the project in development mode.
- `npm run build` to extract a build folder. 
- To run the build folder locally you can use serve. If you haven't installed
serve you can run `npx serve -s build` to avoid installing it globally.
- `npm test` to run the test files.