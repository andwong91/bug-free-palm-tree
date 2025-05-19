/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router';

router.get('/timeline/:timelineId', async () => {
  return {
    hello: 'world',
  }
});

router.get('/snapshot', async () => {
  return {
    hello: 'world',
  }
});

router.post('/snapshot', async () => {
  return {
    hello: 'world',
  }
});
