/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router';

const SnapshotPolicyController = () => import('#controllers/snapshot_policy_controller');
router.resource('snapshots', SnapshotPolicyController).apiOnly();

const TimelinesController = () => import('#controllers/timelines_controller');
router.resource('timelines', TimelinesController).apiOnly();
router.where('timelineId', router.matchers.number());
