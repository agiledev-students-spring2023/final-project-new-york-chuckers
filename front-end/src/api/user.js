import { requestApi } from './requests';

class UserAPI {
  async signIn(data) {
    const response = await requestApi('user/login', {
      method: 'post',
      data,
    });

    return response.data;
  }

  async signUp(data) {
    const response = await requestApi('user/register', {
      method: 'post',
      data,
    });

    return response.data;
  }
}

export const userApi = new UserAPI();
