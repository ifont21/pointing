import axios from 'axios';
import { API_URL } from '../config';

export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts() {
  const request = axios.get(`${API_URL}/posts`);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}
