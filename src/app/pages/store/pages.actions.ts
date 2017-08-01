import { type } from '../../core';
import { Action } from '@ngrx/store';

export const ActionTypes = {
  TOGGLE_SIDEBAR: type('[sidebar] toggle')
};

export class ToggleSidebarAction implements Action {
  public readonly type: string = ActionTypes.TOGGLE_SIDEBAR;

  constructor(public payload: { isOpenSidebar: boolean }) {
  }
}

export type Actions =
  ToggleSidebarAction;
