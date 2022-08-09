import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/service/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  allstudentdata:any
  constructor(private fs:FormService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){   
    this.fs.getStudentData().subscribe(res=>{
      console.log(res)
      this.allstudentdata=res;

    })
  }
  delete(id:number){
    this.fs.deletStudent(id).subscribe(()=>{
      alert("Are you sure want to Delete!!!")
      this.getData()
    })
  }

}
