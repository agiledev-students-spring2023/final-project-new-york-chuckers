import { requestApiWithAuth } from './requests';

class PositionAPI {
  async listPositions() {
    const response = await requestApiWithAuth('positions.json', {
      method: 'get',
    });

    return response.data;
  }
}

export const positionApi = new PositionAPI();
