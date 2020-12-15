# Geocoding API

[![Build Status](https://circleci.com/gh/raparicio6/geocoding-node.svg?style=shield)](https://circleci.com/gh/raparicio6/geocoding-node)

<img alt="App" src="./app-imag.png">

- This application consists of an interactive Google Map with a distance calculator between two addresses or two coordinates. The addresses can be either street addresses or building names. 
- The backend interacts with [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/intro). This API is awesome! 
- To calculate distances, the [Haversine formula](https://en.wikipedia.org/wiki/Haversine_formula) is used.
- Some React cool trending libraries were used to develop the app, such as [React Hook Form](https://react-hook-form.com/) and [Material UI](https://material-ui.com/). Also a special mention to [Google Map React](https://github.com/google-map-react/google-map-react), it is such a powerful tool. I had never integrated React with Google Maps JavaScript API before and this library was very helpful, it worked really well for me.  
**Explore the whole world!**

## Interesting topics
- I think that user experience becomes enhanced by adding an interactive Google Map. It adds value and differentiates this app from others with similar characteristics.
- In order to improve robustness to exceptions, buttons are disabled until fields are filled. Some CSS properties were used to make this experience suitable for the user. 
- Backend endpoints have a strict schema validation on their inputs too.
- There are some important details which make the application more user-friendly, such as loaders, nice error messages, animations. 
- Local storage is used in order to persist the locations and the distance. This allows the user to see the information even after refreshing the page or after closing it and returning back.
- The app is responsive.
- Backend has 100% of code coverage.
- I added some awesome markers for the map which I found on this [article](https://levelup.gitconnected.com/reactjs-google-maps-with-custom-marker-ece0c7d184c4).

## Technical challenges
Some issues I had to deal with are the following:
- Blurring part of the background image.
I thought of a world map background image for the design of the app. In order to properly achieve that, I needed to blur part of the image so that the screen data can be shown. Since I had never done that, I googled about it and examined many options which suggested using a lot of different HTML divs and CSS properties. None of these alternatives helped me, until I ran into an awesome stack overflow answer on page 2 of Google which suggested using backdrop-filter: blur(npx), a CSS magic property! This was definitely what I was looking for.
- The interaction with Google Maps Geocoding API was very intuitive. But I can mention that I had to closely look into all the possible parameters the API can receive (and their format) and also the ones the API responds with. Regarding the latter, in the backend service that interacts with Google API I needed to make a custom validation in the satisfactory response (status 20x) because it may still have had an error. Google API may send the response with status 20x but with an error status field (e.g INVALID_REQUEST, REQUEST_DENIED).
- I wanted to document the backend API but I ran out of time. I always use OpenAPI (A.K.A Swagger) to document APIs, I find it an amazing tool. You can check this [article](https://medium.com/wolox/documenting-a-nodejs-rest-api-with-openapi-3-swagger-5deee9f50420) I wrote last year for more details on how to use it.

## Getting Started

### Installing node

Get the latest version of node from the [official website](https://nodejs.org/) or using [nvm](https://github.com/creationix/nvm).  
Nvm approach is preferred.

Install dependencies by running `npm i`.

Create a *.env* file at the root of the project and add:  
`GOOGLE_GEOCODING_API_KEY=<your Google Geocoding API key>`

**This project has its corresponding [Frontend](https://github.com/raparicio6/geocoding-react).**

### Starting app

We have two ways to start the app. To start it in production mode run `npm start` in the root path of the project. To start it in development mode (nodemon) run `npm run start-dev`. Then access the app at **localhost:port**. The port is logged in the console where you run the start script.  
Also, you can start the app in production mode using [docker](https://www.docker.com/get-started).

## Development

### Environments

By default, the environment will be **development**, but you can easily change it using the **NODE_ENV** environmental variable.

### Environment variables

[Dotenv](https://www.npmjs.com/package/dotenv) is used for managing environment variables. They are stored in the `/.env` file. Take into account that the variables defined in the `bashrc` are not overrided.

The environment variables should be added to the `.env` file in the form of `NAME=VALUE`, as the following example:

```
PORT=8081
```

**Remember not to push nor commit the `.env` file.**

### Testing

In order to execute the tests run `npm test`.  
[Jest](https://jestjs.io/) was used as the testing framework.

## Built With

* [Express.js](https://expressjs.com/)
* [CircleCI](https://circleci.com/)

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Run the tests (`npm test`)
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin my-new-feature`)
6. Create new Pull Request

## About

This project was written and is maintained by [Rodrigo Aparicio](https://github.com/raparicio6).
