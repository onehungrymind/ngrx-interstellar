import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { environment } from '@env/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/nx';
import * as LogRocket from 'logrocket';
import createNgrxMiddleware from 'logrocket-ngrx';

import { reducers } from './state';
import { CustomersEffects } from './state/customers/customers.effects';
import { ProjectsEffects } from './state/projects/projects.effects';
import { sideload } from './state/sideload/sideload.reducer';

LogRocket.init(environment.logrocket);

// opts is the same object you would normally pass to LogRocket.reduxMiddleware()
const logrocketMiddleware = createNgrxMiddleware(LogRocket);

// in your module imports, add the middleware
const metaReducers = [
  sideload,
  logrocketMiddleware,
];

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    EffectsModule.forRoot([
      CustomersEffects,
      ProjectsEffects
    ]),
  ],
  declarations: []
})
export class CoreStateModule { }
