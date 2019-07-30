import { Component, OnInit } from '@angular/core';
import {BsDatepickerConfig} from 'ngx-bootstrap';

@Component({
  selector: 'app-view-added-user',
  templateUrl: './view-added-user.component.html',
  styleUrls: ['./view-added-user.component.scss']
})
export class ViewAddedUserComponent implements OnInit {

   colorTheme = 'theme-orange';
   bsConfig: Partial<BsDatepickerConfig>;

   constructor() {
      this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
   }

  ngOnInit() {
  }

}
