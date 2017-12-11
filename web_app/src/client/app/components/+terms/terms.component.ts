// angular
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// libs
import { ConfigService } from '@ngx-config/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['subscribe.component.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
})

export class SubscribeComponent implements OnInit {
  title: string;
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private readonly config: ConfigService) {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
          this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {
    this.title = 'APP_NAME';
  }

}
