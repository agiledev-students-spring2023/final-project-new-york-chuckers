export const parseJwtPayload = token => JSON.parse(atob(token.split('.')[1]));

export const getLoginUserId = () => {
  const token = localStorage.getItem('id');
  if (token !== null) {
    return parseJwtPayload(token).id;
  }
};

export const getLoginUserType = () => {
  const token = localStorage.getItem('id');
  if (token !== null) {
    return parseJwtPayload(token).type;
  }
};
