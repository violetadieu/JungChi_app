import axios from 'axios';

export function getMember() {
  return axios.get('http://localhost:1348/member');
}
