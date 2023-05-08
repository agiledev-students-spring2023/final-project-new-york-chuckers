import { requestApiWithAuth } from './requests';

class PositionAPI {
  async listPositions() {
    const response = await requestApiWithAuth('position', {
      method: 'get',
    });

    return response.data;
  }
}

export const positionApi = new PositionAPI();
