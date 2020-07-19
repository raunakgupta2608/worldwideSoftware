import { Component, OnInit } from '@angular/core';
import { thirdList } from './../shared/thirdList';
import { secondList } from './../shared/secondList';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  secondList = secondList;
  thirdList = thirdList;
  fourthList = thirdList;

  secList: boolean;
  thiList: boolean;
  fourList: boolean;

  showLessSecond() {
    this.secList = !this.secList;
  }
  showLessThird() {
    this.thiList = !this.thiList;
  }
  showLessFourth() {
    this.fourList = !this.fourList;
  }


  constructor() { }

  ngOnInit() {
    this.secList = true;
    this.thiList = true;
    this.fourList = true;

  }

}
