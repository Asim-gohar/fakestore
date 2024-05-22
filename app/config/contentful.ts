const contentful = require('contentful')

export const client = contentful.createClient({
  space: '5emsb3jtrilt',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'RPUwN7dSAtwrlm6qnpvLLZgGs5GYhZ5LI61Go4DSX08'
}) 
