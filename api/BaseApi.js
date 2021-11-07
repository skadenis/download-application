import axios from 'axios';

export default class BaseApi {
  constructor () {

    this.axios = axios.create({
      baseURL: 'https://backend.gastrosoft.by/'
    });

  }
}
