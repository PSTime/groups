import {SERVER_URL, USER_ID} from '../constants/config.constant';

export default class Api {

  static sendForm(data) {
    const url = `${SERVER_URL}userconfig/${USER_ID}`;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    return fetch(url, {
      method: 'PUT',
      headers: myHeaders,
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json();
      });
  }

  static getForm() {
    const url = `${SERVER_URL}userconfig/${USER_ID}`;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    return fetch(url, {
      method: 'GET',
      headers: myHeaders
    })
      .then(response => {
        return response.json();
      });
  }
}
