import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  CLEAR_PROFILE,
  CREATE_PROFILE_REQUEST,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_ERROR,
} from './types';

const initialState = {
  profile: {
    company: '',
    website: '',
    location: '',
    status: '',
    skills: [],
    bio: '',
    githubUserName: '',
    experience: [],
    education: [],
    social: {
      youTube: '',
      twitter: '',
      facebook: '',
      linkedIn: '',
      instagram: '',
    },
  },
  hasProfile: false,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROFILE_REQUEST:
    case GET_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case CREATE_PROFILE_SUCCESS:
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          ...action.payload,
        },
        hasProfile: true,
        loading: false,
      }
    case CREATE_PROFILE_ERROR:
    case GET_PROFILE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: {
          company: '',
          website: '',
          location: '',
          status: '',
          skills: [],
          bio: '',
          githubUserName: '',
          experience: [],
          education: [],
          social: {
            youTube: '',
            twitter: '',
            facebook: '',
            linkedIn: '',
            instagram: '',
          },
        },
        hasProfile: false,
        profiles: [],
        repos: [],
        loading: false,
        error: {},
      }
    default:
      return state;
  }
};

export default reducer;