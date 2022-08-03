import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from 'src/app/service/form.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.scss']
})
export class AddformComponent implements OnInit {
  form!: FormGroup
  id!: number
  constructor(private fb: FormBuilder, private fs: FormService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    if (this.id) {

      // edit part
      this.fs.getDataById(this.id).subscribe(res => {
        console.log(res)
        this.createForm(res)





      })
    }
    this.createForm()
  }

  createForm(item: any = {}) {

    console.log("createform", item)
    this.form = this.fb.group({
      // id: new FormControl(item.id),
      // name: new FormControl(item.name),
      // class: new FormControl(item.class),
      // address: new FormControl(item.address)


      //next method for form control 
      id: [item.id],
      name: [item.name ? item.name : 'avisek'],
      class: [item.class],
      address: [item.address]

    })
  }
  postData() {  //data aayo vane yo lline of code 
    if (this.id) {
      this.fs.updateData(this.form.value, this.id).subscribe(() => {
        alert("Updated Successfully")
        this.router.navigateByUrl('')
      })
    } else { // data aayan vane execute this liine of code
      this.fs.postStudentData(this.form.value).subscribe(() => {
        alert("create succesfully!!")
        this.router.navigateByUrl('')
      })
    }

  }
}
