import { combineReducers } from 'redux';

import breedsReducer, { IBreedState } from './breeds/reducer';
import networkReducer, { INetworkState } from './network/reducer';
import settingsReducer, { ISettingsState } from './settings/reducer';

export interface IRootState {
  breeds: IBreedState;
  network: INetworkState;
  settings: ISettingsState;
}

const rootReducer = combineReducers({
  breeds: breedsReducer,
  network: networkReducer,
  settings: settingsReducer,
});

export default rootReducer;
