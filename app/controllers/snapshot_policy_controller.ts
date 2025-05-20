import { __dirname } from '#controllers/core';
import { updateSnapshotPolicyValidator } from '#validators/snapshot_policy';
import type { HttpContext } from '@adonisjs/core/http';
import fs from 'fs';
import path from 'path';

export default class SnapshotPolicyController {
  // get an existing snapshot policy
  async index() {
    const snapshotPolicy = fs.readFileSync(path.resolve(__dirname, 'snapshot_policy.json'), 'utf-8');
    return JSON.parse(snapshotPolicy);
  }

  // update an existing snapshot policy
  async update({ request }: HttpContext) {
    const payload = await request.validateUsing(updateSnapshotPolicyValidator);
    fs.writeFileSync(path.resolve(__dirname, 'snapshot_policy.json'), JSON.stringify(payload, null, 2));
    return payload;
  }
}