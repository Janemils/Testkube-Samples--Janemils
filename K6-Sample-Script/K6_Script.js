import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  const resp=http.get('https://test.k6.io');
  console.log('Response:',resp)
}

