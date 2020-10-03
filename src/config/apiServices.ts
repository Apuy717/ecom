//====================================online root=============================================
const baseUrl = 'https://jsonplaceholder.typicode.com/';

const request = {
  get: async (url) => {
    const req = new Request(baseUrl + url, {
      method: 'GET',
    });

    return await fetch(req).then((r) => r.json());
  },
  post: async (url, body) => {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    const req = new Request(baseUrl + url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    });

    return await fetch(req).then((r) => r.json());
  },

  getWithToken: async (url, token) => {
    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + token);
    const req = new Request(baseUrl + url, {
      method: 'GET',
      headers: headers,
    });

    return await fetch(req).then((r) => r.json());
  },
  deleteWithToken: async (url, token) => {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + token);
    const req = new Request(baseUrl + url, {
      method: 'DELETE',
      headers: headers,
    });

    return await fetch(req).then((r) => r.json());
  },
  postWithToken: async (url, token, body) => {
    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + token);
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    const req = new Request(baseUrl + url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    });

    return await fetch(req).then((r) => r.json());
  },
};

export default request;
