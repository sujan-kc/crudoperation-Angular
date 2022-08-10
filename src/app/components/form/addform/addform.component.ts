import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from 'src/app/service/form.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.scss'],
})
export class AddformComponent implements OnInit {
  form!: FormGroup;
  id!: number;
  constructor(
    private fb: FormBuilder,
    private fs: FormService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      // edit part
      this.fs.getDataById(this.id).subscribe((res) => {
        console.log("my log", res);
        this.createForm(res);
        this.calculateTotalMarks();
      });
    }
    this.createForm();
  }

  createForm(item: any = {}) {
    this.form = this.fb.group({
      // id: new FormControl(item.id),
      // name: new FormControl(item.name),
      // class: new FormControl(item.class),
      // address: new FormControl(item.address)

      //next method for form control
      id: [item.id],
      name: [item.name ? item.name : '', Validators.required],
      address: [item.address, Validators.required],
      result: this.fb.array(
        (() => {
          // if not of item.result => return  []
          if (!item.result) {
            return [this.createStudentDetails()];
          }
          //
          else {
            return item.result.map((res: any) =>
              this.createStudentDetails(res)
            );
          }
        })()
      ),
      totalMarks: [item.totalMarks ? item.totalMarks : 0]
    });
  }

  createStudentDetails(item: any = {}) {
    return this.fb.group({
      id: [item.id ? item.id : 0],
      subject: [item.subject ? item.subject : '', Validators.required],
      marksObtained: [
        item.marksObtained ? item.marksObtained : null,
        Validators.required,
      ],
    });
  }

  get studentDetails() {
    return this.form.get('result') as FormArray;
    // result => resutl= [ ]
  }

  addFormArrGroup() {
    this.studentDetails.push(this.createStudentDetails());
  }

  // enable form controls
  enableFormArrControl() {
    this.studentDetails.enable();
  }

  // disable form Controls
  disableFormArrControl() {
    this.studentDetails.disable();
  }

  addFormArrGroupFunction() {
    this.enableFormArrControl();
    if (this.studentDetails.valid) {
      this.disableFormArrControl();
      this.addFormArrGroup();
    }
  }

  // edit formArr group
  editFormArrGroup(i: number) {
    // console.log('index', i);
    // console.log('abcd', abcd);
    this.studentDetails.controls[i].enable();
  }

  // delete formArr group
  delFormArrGroup(i: number) {
    if (this.studentDetails.length > 1) {
      this.studentDetails.removeAt(i);
    }
  }

  // get() {
  //   console.log(this.studentDetails)
  //   console.log(this.studentDetails.controls[0].get('subject')?.value)
  // }
  postData() {
    // data aayo vane yo lline of code
    if (this.id) {
      this.fs.updateData(this.form.getRawValue(), this.id).subscribe(() => {
        alert('Updated Successfully');
        this.router.navigateByUrl('');
      });
    } else {
      // data aayan vane execute this liine of code
      this.fs.postStudentData(this.form.getRawValue()).subscribe(() => {
        alert('Created Successfully');
        this.router.navigateByUrl('');
      });
    }
  }

  // setValue,value
  calculateTotalMarks() {
    let sums = 0;
    this.studentDetails.controls.forEach(element => {
      // console.log(typeof element.get("marksObtained")?.value)
      sums = sums + (+element.get("marksObtained")?.value);
      console.log("sums here", sums);
    });
    this.form.get("totalMarks")?.setValue(sums);

  }
}
