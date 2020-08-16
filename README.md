# Front-End Engineering Code Challenge

Thank you for accepting our coding challenge. Please take as much time as required to give us a good indication of your coding strengths. You do not have to follow the project structure or packages given to you. Feel free to organize your project however you'd like, and include/exclude any packages of your choice.

## Starter Project Bootstrapped Using:
- React
- Webpack
- SCSS - you can keep or replace with any other style solution
- Jest
- ESLint
- Mock API using json-server and faker

## Setup:
This project requires [node.js](https://www.npmjs.com/get-npmhttps://www.npmjs.com/get-npm)
1. Fork this repo
2. Install project dependencies `npm install`
3. Start app with mock api `npm run dev:api` 
  - Client-side App - http://localhost:8080/
  - Mock API - http://localhost:8081/api/categories


## Requirements:
For this challenge, you will fetch data from a mock API, and render a category page with a list of products. A user will be able to add a product to their shopping cart and view their cart. All data required to render a catalog and its products is available via the mock API. 

You may or may not choose to add additional packages for fetching API data, page routing, state management, or styling. We have kept this unopinionated so you can use whatever tools you like best.
- Category page contains a grid of products for a single category
    - Tip: use `slug` URL query parameter to get a single category from the API
    - Display 3 products per row on desktop
    - Display 2 products per row on tablet
    - Display 1 product per row on mobile
- Each product displays information for the variant with the lowest regular price:
    - Variant image
    - Product name
    - Price rounded to the nearest dollar
- Clicking on the product renders a modal dialog that contains:
    - Product description
    - Product manufacturer name and location
    - “Add to Cart” button
- Clicking on “Add to Cart” takes the user to a cart page
- The cart page contains an order summary with a list of all products added to the cart:
    - Small product thumbnail
    - Product name
    - Product price
    - Order total for all products in the cart

## Bonus Tasks (not required):
If you're feeling extra 💪 feel free to do some bonus tasks.
- Add unit tests
- Run your code through our linting rules
- Store the user’s data so if they return to the site a few days later, they don’t have to start over again 

## Submission
Please submit your app either by sending a zip file or by providing a link to a repository, github pages, or other hosting of your choice.
