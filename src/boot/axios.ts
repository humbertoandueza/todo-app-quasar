import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}

const BASE_URL = process.env.POST_URL;
const POST_ID = process.env.POST_ID;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'app-id': POST_ID,
  },
});

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api };
