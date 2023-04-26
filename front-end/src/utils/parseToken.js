export const parseJwtPayload = token => JSON.parse(atob(token.split('.')[1]));

export const getLoginUserId = () => {
  const token = localStorage.getItem('id');
  return parseJwtPayload(token).id;
};
