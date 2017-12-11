// angular
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// libs
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ConfigService } from '@ngx-config/core';

// framework
import { getWorkingLanguage, Language } from '../../framework/i18n/i18n.module';
import { AuthService } from '@ngx-auth/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['main.component.scss']
})

export class MainComponent implements OnInit {
  isBrowser: boolean;
  title: string;
  currentLanguage$: Observable<Language>;
  availableLanguages: Array<Language>;
  isAuthenticated: boolean;

  constructor(@Inject(PLATFORM_ID) public platformId: Object,
              private readonly store: Store<Language>,
              private readonly config: ConfigService,
              private readonly auth: AuthService) {

}

  ngOnInit(): void {
    this.title = 'APP_NAME';
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.currentLanguage$ = this.store.select(getWorkingLanguage);
    this.availableLanguages = this.config.getSettings('i18n.availableLanguages');
    this.isAuthenticated = this.auth.isAuthenticated;
  }

  onActivate(event$: any, scrollContainer: any): void {
    scrollContainer.scrollTop = 0;
  }

  logout(): void {
    this.auth.invalidate();
  }
}
