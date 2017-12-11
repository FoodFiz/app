// angular
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

// app
import { routeAnimation } from '../../app.animations';
import * as $ from 'jquery';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['home.component.scss'],
  animations: [routeAnimation]
})

/*
export class HomeComponent implements AfterViewInit {
  //@ViewChild('#selectElem') el: ElementRef;
  items = ['First', 'Second', 'Third'];
  selectedValue = 'Second';
  ngAfterViewInit() {
    $('#selectElem').on('change'){
      alert('456');
    };
  }
}
*/

export class HomeComponent {

}
