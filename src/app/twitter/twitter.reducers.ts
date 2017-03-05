import { combineReducers } from 'redux';

import { getMockPosts } from '../timeline/mock-posts';
import {
  POST_ADD,
  POST_TOGGLE_LIKE,
  POST_TOGGLE_REPOST,
  POST_CLICK_NEW_POST_NOTIFICATION,

  USER_SET_NAME,
  USER_SET_HANDLE,
  USER_SET_PROFILE_PHOTO_URL,
} from './twitter.action-types';

const POSTS_INITIAL_STATE = getMockPosts();

function posts(state: IPost[] = POSTS_INITIAL_STATE, action) {
  switch (action.type) {
    case POST_ADD:
      return [action.value, ...state];
    case POST_TOGGLE_LIKE:
      return state.map(post => {
        if (post.id === action.value.id) {
          return Object.assign({}, action.value, { liked: !action.value.liked });
        }
        return post;
      });
    case POST_TOGGLE_REPOST:
      return state.map(post => {
        if (post.id === action.value.id) {
          return Object.assign({}, action.value, { reposted: !action.value.reposted });
        }
        return post;
      });
    default:
      return state;
  }
}

const USER_INITIAL_STATE: IUser = {
  name: 'Jesse Pinho',
  handle: 'jessepinho',
  headerPhotoURL: 'https://pbs.twimg.com/profile_banners/16901789/1398787929/1500x500',
  profilePhotoURL: 'https://pbs.twimg.com/profile_images/378800000310650745/5e38031f42fdbacc2c2041f021460f02.jpeg',
};

function user(state: IUser = USER_INITIAL_STATE, action): IUser {
  switch (action.type) {
    case USER_SET_NAME:
      return Object.assign({}, state, { name: action.value });
    case USER_SET_HANDLE:
      return Object.assign({}, state, { handle: action.value });
    case USER_SET_PROFILE_PHOTO_URL:
      return Object.assign({}, state, { profilePhotoURL: action.value });
    default:
      return state;
  }
}

const NEW_POST_IDS_INITIAL_STATE = POSTS_INITIAL_STATE.slice(0, 2).map(post => post.id);

function newPostIds(state: string[] = NEW_POST_IDS_INITIAL_STATE, action) {
  if (action.type === POST_ADD) {
    return [action.value.id, ...state];
  }
  if (action.type === POST_CLICK_NEW_POST_NOTIFICATION) {
    return [];
  }
  return state;
}

export const rootReducer = combineReducers<IAppState>({
  posts,
  user,
  newPostIds,
});
