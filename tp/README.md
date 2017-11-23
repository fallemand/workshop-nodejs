# Workshop Node & React

> Final result: [App](https://workshop-lb.herokuapp.com/app/) &
[API](https://workshop-lb.herokuapp.com/api/search?q=node).

## Development

- Install dependencies:

  ```sh
  $ npm install
  ```

- Build assets:

  ```sh
  $ npm run build
  ```

  *Alternatively you could watch for changes:*

  ```sh
  $ npm run watch
  ```

- Start project:

  ```sh
  $ npm run start:dev
  ```

  *If you prefer not to use mocks, try using the stage envirorment:*

  ```sh
  $ npm run start:stage
  ```

### URLs & Enpoints

By default the App and API will run locally on `localhost:3000`,
on the following URLs and Enpoints:

```
# App
localhost:3000/app
localhost:3000/app/search?q={query}
localhost:3000/app/items/{id}

# API
localhost:3000/api/search?q={query}
localhost:3000/api/suggest?q={query}
localhost:3000/api/items/{id}
```

## Tests

- Run unit tests:

  ```sh
  $ npm run test:unit
  ```

- Run e2e tests:

  ```sh
  $ npm run test:e2e
  ```

  *Remember to setup the envirorment first:*

  ```sh
  $ npm run setup:e2e
  ```
