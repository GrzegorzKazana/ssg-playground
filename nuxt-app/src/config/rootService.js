import fetch from 'isomorphic-fetch';

import createHttpService from '../common/services/httpService';

export const httpService = createHttpService(fetch);

export default {
  httpService
};
