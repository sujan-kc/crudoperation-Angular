import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {

  }

}
