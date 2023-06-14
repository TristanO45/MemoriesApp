const postsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload; // Assuming the action payload contains the fetched posts
    case "CREATE":
      return [...state, action.payload]; // Assuming the action payload contains the new post
    default:
      return state;
  }
};

export default postsReducer;
