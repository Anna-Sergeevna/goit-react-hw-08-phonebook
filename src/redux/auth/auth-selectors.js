const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getFetchingCurrent = state => state.auth.isFetchCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getFetchingCurrent,
};

export default authSelectors;
