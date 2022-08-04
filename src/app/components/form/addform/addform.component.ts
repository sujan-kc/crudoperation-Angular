import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
    this.form = this.fb.group({
      // id: new FormControl(item.id),
      // name: new FormControl(item.name),
      // class: new FormControl(item.class),
      // address: new FormControl(item.address)
      //next method for form control 
      id: [item.id],
      name: [item.name ? item.name : ''],
      class: [item.class],
      address: [item.address],
      result: this.fb.array(
        (
          () => {
            // if not of item.result => return  []
            if (!item.result) {
              return [this.createStudentDetails()]
            }
            // 
            else {
              return item.result.map((res: any) => this.createStudentDetails(res))
            }
          })()
      )
    })
  }

  createStudentDetails(item: any = {}) {
    return this.fb.group({
      id: [item.id ? item.id : 0],
      subject: [item.subject ? item.subject : ''],
      marksObtained: [item.marksObtained ? item.marksObtained : null]
    })
  }

  get studentDetails() {
    return this.form.get('result') as FormArray
    // result => resutl= [ ]
  }

  addFormArrGroup() {
    this.studentDetails.push(this.createStudentDetails())
  }

  // get() {
  //   console.log(this.studentDetails)
  //   console.log(this.studentDetails.controls[0].get('subject')?.value)
  // }
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
