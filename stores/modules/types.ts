import { DarkModesState } from './darkModes/types';
import { UserState } from './users/types';

export interface CombineState {
  users: UserState;
  darkModes: DarkModesState;
}
