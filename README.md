# High Level CMS Comparison

The project was aimed to provide a CMS comparison table and CMS Comparison Slides in a web application which was built by GatsbyJS + Contentful.

## Getting started

Install [Yarn](https://yarnpkg.com/en/docs/install) or Npm (if you haven't already).

### Set up content

Before running the application, you need to import content into a Contentful space.
- Sign up with Contentful if you do not have an account (Each free account can have 2 spaces)
- Create an empty space in Contentful (Grab space id from Settings -> General Settings for the future use)
- Install Contentful CLI (if you haven't already)
```
$ npm install -g contentful-cli
```
- Run the underlying command to sign into Contentful and follow steps to complete the authentication process (More details can be found at: https://www.contentful.com/developers/docs/tutorials/cli/authentication/)
```
$ contentful login
```
- Get into the root directory (if the current path is not the root of the project)
- Run the underlying command to import content (Replace {SpaceId} before executing)
```
contentful space import --space-id {SpaceId} --content-file ./contentful/export.json
```


### Install dependencies

```
$ yarn install
```

### Set up Contentful Access in .env
- Create a new file .env from .env.example
- Fill up CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN (Both can be found in Settings -> API Keys)

### Start the web application

```
yarn start
```
Now you can visit the web application at http://localhost:8000/

## Others

GatsbyJS provides GraphiQL which is a GraphQL IDE. You can access it when your site’s development server is running—normally at http://localhost:8000/___graphql.
