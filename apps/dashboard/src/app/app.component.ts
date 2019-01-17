import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@interstellar/core-data';
import { Observable } from 'rxjs';
import { SideloadFacade } from '@interstellar/core-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NgRx Interstellar';
  isLoggedIn$: Observable<boolean> = this.authService.isAuthenticated$;
  isLoggedIn;

  links = [
    { path: '/projects', icon: 'work', label: 'Projects' }
  ];

  constructor(
    private authService: AuthService,
    private router: Router,
    private sideloadFacade: SideloadFacade,
  ) { }

  ngOnInit() {
    this.isLoggedIn$
      .subscribe(loggedIn => {
        const path = (loggedIn) ? '' : 'login';
        this.isLoggedIn = loggedIn;
        this.router.navigate([path]);
      })
  }

  sideload() {
    const state = {
      customers: {
        ids: [],
        entities: {}
      },
      projects: {
        ids: [
          '1',
          '2',
          '3',
          '5',
          'dawluHb'
        ],
        entities: {
          '1': {
            id: '1',
            title: 'Project One',
            details: 'This is a sample project',
            percentComplete: 20,
            approved: false,
            startDate: null,
            targetDate: null,
            completionDate: null,
            customerId: '1'
          },
          '2': {
            id: '2',
            title: 'Project Two',
            details: 'This is a sample project',
            percentComplete: 40,
            approved: false,
            startDate: null,
            targetDate: null,
            completionDate: null,
            customerId: '3'
          },
          '3': {
            id: '3',
            title: 'Project Three',
            details: 'This is a sample project',
            percentComplete: 60,
            approved: false,
            startDate: null,
            targetDate: null,
            completionDate: null,
            customerId: '7'
          },
          '5': {
            id: '5',
            title: 'Project Five',
            details: 'This is a sample project',
            percentComplete: 100,
            approved: true,
            startDate: null,
            targetDate: '2018-10-26T07:00:00.000Z',
            completionDate: null,
            customerId: '1'
          },
          dawluHb: {
            id: 'dawluHb',
            title: 'New Project',
            details: 'Hello!',
            percentComplete: 0,
            approved: false,
            customerId: '3'
          }
        },
        selectedProjectId: '1'
      }
    };
    this.sideloadFacade.load(state);
  }

  dispatch() {
    const action = {
      payload: {
        id: '1',
        title: 'Project YASSSSSS!',
        details: 'This is a sample project',
        percentComplete: 20,
        approved: true,
        startDate: null,
        targetDate: null,
        completionDate: null,
        customerId: '1'
      },
      type: '[Projects] Data Updated'
    };
    this.sideloadFacade.dispatch(action);
  }

  logout() {
    this.authService.logout();
  }

  isSidenaveOpen(component, authentication) {
    return component.opened && authentication;
  }
}
