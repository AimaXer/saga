import { Api } from './constants';

export const GetAllItemsAPI = () => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibWFAd3AucGwiLCJpYXQiOjE2Njg5ODQzNTd9.1tBYaZu1fd3R69OQvkSTHdYqVmWc3-smZH4c70zg--4';
  const organizationId = '2147483647';
  const options = {
    method: 'POST',
    headers: { ...Api.HEADERS, Authorization: 'Bearer ' + token },
    body: JSON.stringify({ organizationId: organizationId })
  };

  return fetch(Api.BASE_PATH + 'items/getAllItems', options)
    .then(response => response.json());
};