import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@interstellar/core-data';
import { Observable } from 'rxjs';
import { SideloadFacade } from '@interstellar/core-state';

import 'brace/index';
import 'brace/theme/eclipse';
import 'brace/mode/json';
import 'brace/ext/language_tools.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NgRx Interstellar';
  isLoggedIn$: Observable<boolean> = this.authService.isAuthenticated$;
  isLoggedIn;
  @ViewChild('stateEditor') stateEditor;
  @ViewChild('actionEditor') actionEditor;

  links = [
    { path: '/projects', icon: 'work', label: 'Projects' }
  ];

  state = '';
  action = '';

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

    this.initEditor(this.stateEditor);
    this.initEditor(this.actionEditor);
  }

  initEditor(editor) {
    editor.setTheme('monokai');

    editor.setMode('json');

    editor.getEditor().setOptions({
      showLineNumbers: false,
      showGutter: false,
      tabSize: 2,
      fontSize: '24px',
    });
  }

  sideload() {
    this.sideloadFacade.load(JSON.parse(this.state));
  }

  dispatch() {
    this.sideloadFacade.dispatch(JSON.parse(this.action));
  }

  logout() {
    this.authService.logout();
  }

  isSidenaveOpen(component, authentication) {
    return component.opened && authentication;
  }
}
