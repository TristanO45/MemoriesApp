const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload; // Assuming the action payload contains the fetched posts
    case "CREATE":
      return [...posts, action.payload]; // Assuming the action payload contains the new post
    default:
      return posts;
  }
};

export default postsReducer;
