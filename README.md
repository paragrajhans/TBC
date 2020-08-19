## Installation

Get the repository (master branch) and run the following commands:

```bash
npm i
npm run dev:api
```

- url for browser : http://localhost:8080

- Mock API - http://localhost:8081/api/categories

* Mock API - http://localhost:8081/api/categories

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
