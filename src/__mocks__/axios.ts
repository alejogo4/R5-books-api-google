
const axiosMock = {
  get: jest.fn().mockResolvedValue({ data: {} }),
  create:jest.fn(() => jest.genMockFromModule('axios'))
};

export default axiosMock;
