import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '..';
import { SideloadState } from './sideload.reducer';

@Injectable({
  providedIn: 'root'
})
export class SideloadFacade {

  constructor(private store: Store<AppState>) { }

  load(state) {
    this.store.dispatch(new SideloadState(state));
  }

  dispatch(action) {
    this.store.dispatch(action);
  }
}
