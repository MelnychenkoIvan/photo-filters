import { createSelector } from 'reselect';

import * as pages from './pages/store/pages.reducers';

// Common application state interface
export interface State {
  pages: pages.State;
}

export const reducers = {
  pages: pages.reducer
};


/**********************************************************
 * Pages Reducers
 *********************************************************/

export const getPagesState = (state: State) => state.pages;

export const isOpenSidebar = createSelector(getPagesState, pages.isOpenSidebar);
