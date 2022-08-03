import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  //URL lie api_url variable banayara assign gareko
  api_url = "http://localhost:3000"
  constructor(private http: HttpClient) { }


  //URL bata data tanne function banako
  getStudentData() {
    return this.http.get(`${this.api_url}/student`)
  }

  // form create/post
  postStudentData(data: any) {
    return this.http.post(`${this.api_url}/student`, data)
  }
  deletStudent(id: number) {
    return this.http.delete(`${this.api_url}/student/${id}`,)
  }


  // this is the service for getdata from server
  getDataById(id: number) {
    return this.http.get(`${this.api_url}/student/${id}`)
  }
  // this is the service for update data
  updateData(data: any, id: number) {
    return this.http.put(`${this.api_url}/student/${id}`, data)
  }
}
