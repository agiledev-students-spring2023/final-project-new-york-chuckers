import { requestApiWithAuth } from './requests';

class FreelancerAPI {
  async listFreelancers() {
    const response = await requestApiWithAuth('freelancers.json', {
      method: 'get',
    });

    return response.data;
  }
}

export const freelancerApi = new FreelancerAPI();
