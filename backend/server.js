const express = require('express');
const logger = require('winston');
const app = express();
const port = 5000;

app.get('/', (request, response) => {
	response.send(`Hello, I'm alive`);
	logger.info('Responded to GET request on /')
});

app.get('/api/me', (request, response) => {
	response.send('{"name": "Fredrik Vraalsen", "location": "Earth"}');
	logger.info('Responded to GET request on /api/me')
});

app.get('/api/work', (request, response) => {
	response.send('[{"yearFrom": "2018", "yearTo": "2018", "place": "Oslo kommune", "comment": "Data Platform Architect"}, {"yearFrom": "2016", "yearTo": "2018", "place": "Schibsted", "comment": "Data Engineer"}]');
	logger.info('Responded to GET request on /api/work')
});

app.get('/api/education', (request, response) => {
	response.send('[{"yearFrom": "1999", "yearTo": "2001", "place": "University of Illinois", "comment": "Studying"}, {"yearFrom": "1995", "yearTo": "1999", "place": "University of Oslo", "comment": "Studying"}]');
	logger.info('Responded to GET request on /api/edu')
});

app.listen(port, (err) => {
  if (err) {
    return logger.error('something bad happened', err)
  }

  logger.info(`server is listening on ${port}`)
});
