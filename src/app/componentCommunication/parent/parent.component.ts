import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  // firstName!: string;
  // lastName!: string;
  // siblings!: Array<string>;
  form!: FormGroup
  namevar = ""
  test1 = ""
  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    // this.firstName = 'John';
    // this.lastName = 'Doe';
    // this.siblings = new Array<string>('Jane', 'Jack', 'Sophie');
    this.createForm()
  }

  createForm(item: any = {}) {
    this.form = this.fb.group({
      name: [item.name ? item.name : 'default  name']
    })
  }

  trigger(name: any) {
    console.log(name.value)
    this.namevar = name.value

  }
  recieverFromChild(e: string) {
    console.log(e)
    this.test1 = e
  }


}
