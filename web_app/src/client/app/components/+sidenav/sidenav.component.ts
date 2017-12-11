// angular
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// libs
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ConfigService } from '@ngx-config/core';

// framework
import { getWorkingLanguage, Language } from '../../framework/i18n/i18n.module';
import { AuthService } from '@ngx-auth/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
})
export class SidenavComponent implements OnInit {
  title: string;
  currentLanguage$: Observable<Language>;
  isAuthenticated: boolean;

  constructor(private readonly store: Store<Language>,
              private readonly config: ConfigService,
              private readonly auth: AuthService) {
  }

  ngOnInit(): void {
    this.title = 'APP_NAME';
    this.currentLanguage$ = this.store.select(getWorkingLanguage);
    this.isAuthenticated = this.auth.isAuthenticated;
  }

  logout(): void {
    this.auth.invalidate();
  }
}
