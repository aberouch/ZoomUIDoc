import { Component, OnInit, Input, NgModule } from '@angular/core';
import { ZoomPageTemplateComponent } from '@zoomui/page-template';
import { ZoomButtonComponent } from '@zoomui/button';


@Component({
  selector: 'app-raet-button',
  templateUrl: './raet-button.component.html',
  styleUrls: ['./raet-button.component.sass']
})
export class RaetButtonComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
