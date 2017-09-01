import postsSort from './lib/postsSort';

export default (state = {}, action) => {
  switch (action.type) {
    case 'POPULATE_FOLLOWING_POSTS' :
      return { ...state, posts: action.payload };
    case 'LIKE_POST' :
      if (!state.posts[action.postId]) return state;
      const stateCopy = {...state};
      stateCopy.posts[action.postId].likes = action.payload.likes;
      stateCopy.posts[action.postId].likedBy = action.payload.likedBy;
      return stateCopy;
    case 'SORT_FOLLOWING_POSTS' :
      const nextState = postsSort(state, action.sortType, action.lToG, action.searchTerm);
      return nextState;
    default :
      return state;
  }
}
