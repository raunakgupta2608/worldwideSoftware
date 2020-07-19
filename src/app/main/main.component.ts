import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { messages } from './../shared/messages';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  @ViewChild('text', { static: true }) textareaEleRef: ElementRef;
  messages = messages;
  inpVal = {
    date: "",
    values: [
      {
        "name": "",
        "message": ""
      }
    ]
  };

  arr = {
      "name": "",
      "message": ""
  };

  onKeyUp(value) {
    let index: number;

    this.messages.forEach((m, i) => {
      if (m.date === "Sunday, 26 September") index = i;
    });

    if(typeof(index) === 'undefined') {
      this.inpVal.date = "Sunday, 26 September";
      this.inpVal.values[0].name = "Scarlett";
      this.inpVal.values[0].message = value;
      this.messages.push(this.inpVal);
    }
    else {
      this.arr.name = "Scarlett",
      this.arr.message = value;
      this.messages[index].values.push(this.arr);
    }
    this.textareaEleRef.nativeElement.value = "";
  }

}
