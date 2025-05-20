import { __dirname } from '#controllers/core';
import type { HttpContext } from '@adonisjs/core/http';
import fs from 'fs';
import path from 'path';

export default class TimelinesController {
  // get an existing timeline
  async show({ request }: HttpContext) {
    const { id } = request.params();
    const fileName = id === '1' ? 'iopsTimeline.json' : 'throughputTimeline.json';
    const timeline = fs.readFileSync(path.resolve(__dirname, fileName), 'utf-8');
    return JSON.parse(timeline);
  }
}
