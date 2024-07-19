import { RootState } from '@store/index'; // Ajusta la ruta según sea necesario
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore<RootState>([]);

export default mockStore;