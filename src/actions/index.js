import axios from 'axios';
import { API_URL } from '../config';

export const FETCH_CHALLENGERS = 'FETCH_CHALLENGERS';
export const  CREATE_CHALLENGERS = 'CREATE_CHALLENGERS';

export function fetchChallengers() {
  const request = axios.get(`${API_URL}/challengers`);
  return {
    type: FETCH_CHALLENGERS,
    payload: request
  }
}

export function createChallenger(props){
  console.log(props);
  const request = axios.post(`${API_URL}/challengers`,props);
  return {
    type: CREATE_CHALLENGERS,
    payload: request
  }
}
