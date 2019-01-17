import { ActionReducer, Action } from '@ngrx/store';

export enum SideloadActionTypes {
  SideloadState = '[Sideoload] Load Data'
}

export class SideloadState implements Action {
  readonly type = SideloadActionTypes.SideloadState;
  constructor(public payload: any) {}
}

export function sideload(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action: any) {
    if (action.type === SideloadActionTypes.SideloadState) {
      state = action.payload;
    }

    return reducer(state, action);
  };
}
