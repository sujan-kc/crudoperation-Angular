import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  // parent to child -> @Input
  // childt to parent-> @Output

  @Input('fname') fname!: string
  @Input('lname') lname!: string
  @Input('siblings') siblings!: Array<string>

  @Input('namevar') namevar!: string

  childVar = ""
  @Output() stringEvent = new EventEmitter<string>();
  // stringEvent:CustomEvent

  constructor() { }
  ngOnInit(): void {
    this.childVar = "children data"
  }

  sendDatatoParent(input: any) {
    this.stringEvent.emit(input.value)
  }

}
