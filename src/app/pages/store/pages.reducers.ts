import { Actions, ActionTypes } from './pages.actions';

export interface State {
  isOpenSidebar: boolean;
}

const initialState: State = {
  isOpenSidebar: true
};

export function reducer(state: State = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.TOGGLE_SIDEBAR:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export const isOpenSidebar = (state: State) => state.isOpenSidebar;
