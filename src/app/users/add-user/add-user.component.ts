import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

   colorTheme = 'theme-orange';

   bsConfig: Partial<BsDatepickerConfig>;

  constructor() {
     this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
  }

  ngOnInit() {
  }

}
