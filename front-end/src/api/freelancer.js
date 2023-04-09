import { requestApiWithAuth } from './requests';

class FreelancerAPI {
  async listFreelancers() {
    const response = await requestApiWithAuth('freelancer', {
      method: 'get',
    });

    return response.data;
  }
}

export const freelancerApi = new FreelancerAPI();
