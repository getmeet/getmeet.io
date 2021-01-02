import {docCookies} from './cookies';

const isAuthenticated = ()=>{
  let apiToken = docCookies.getItem('auth');
  return !!apiToken;
}

export {isAuthenticated}
