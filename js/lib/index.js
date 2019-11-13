import Vue from 'vue'; // eslint-disable-line import/no-extraneous-dependencies
import vgl from 'vue-golden-layout';

Vue.use(vgl);

export { GoldenLayoutModel } from './GoldenLayout';

export const { version } = require('../package.json'); // eslint-disable-line global-require
