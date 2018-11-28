Fair Car Viewer (Homework assignment) - Bartow Weiss

## To Run
    1. 'npm install'
    2. 'npm start'

## About
* A Car Listing Section
  * The car listing section displays a list of cars retrieved from the vehicle index API endpoint provided. With following info:
    * Vehicle Make, Model, Trim, and Year
    * Car Image
    * Start Fee and Monthly Fee
  * Pagination using the data from the index api response
  * When clicking on a specific car, sends data to Car Detail section.
* Car Details Section
  * Loads the vehicle data from the vehicle specific API endpoint
    * error handling implemented.
  * Showcases the vehicle, using all given data from API endpoint
  * Implements a car images gallery for browsing through all images of the car.
* Vehicle Favoriting
  * User can favorite and unfavorite cars on the car listing and car details page.
  * Favorites are tracked and persisted locally.
  * The favorites on the car listing and vehicle detail page are in sync.

MISSING 
* Car Mileage Slider - The api endpoints did not provide any information on how milage may effect pricing, it only provided the start and monthly payments, so I chose to omit this feature and focus on what I could make with the information I did have instead of displaying incorrect or misleading information

* Jest testing - I havent used Jest before and was unable to figure it out and get it working in a timely manner. I am continuing to investigate how to use jest, but in the interest of time, I tested and error handled in the react component files.


#########################################################################
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
    In the project directory, you can run:

### `npm start`
    Runs the app in the development mode.<br>
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

    The page will reload if you make edits.<br>
    You will also see any lint errors in the console.

### `npm test`
    Launches the test runner in the interactive watch mode.<br>
    See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
