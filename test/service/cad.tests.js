import { check, group, sleep } from 'k6';
import GetAuthToken from '../../clients/auth.js';
import { Cad } from '../../clients/services/cad.js';
import { training } from '../../clients/core/config.js';

export const options = {
  vus: 5,
  duration: '60s',
};

export function setup() {
  const { username, password } = training;
  const token = GetAuthToken(username, password);
  return token;
}


export default function(token) {
  const cadApi = new Cad(token);

  group('GET Cad', function() {
    const cadList = cadApi.getAll();
    check(cadList, {
      'is not empty': (r) => cadList.length !== 0,
      'each cad has id': (r) => cadList.every(c => c._id)
    })
    sleep(5);
  })

  group('POST Cad', function() {
    const cadName = `K6-LOAD-AutoCAD-${Date.now()}`;
    const newPremierOneCad = cadApi.createPremierOne(cadName);
    check(newPremierOneCad, {
      'PremierOne cad has been created': (p) => p === 'OK'
    })
    sleep(5);
  })
}