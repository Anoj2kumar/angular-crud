import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {contact, contactus} from './component/contactmodels'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //post method
  addcontact(data:contact){
    return this.http.post<contact>("http://localhost:3000/posts", data)

  }

  //get data
  getcontact(){
    return this.http.get<contact>("http://localhost:3000/posts")
  }

  //delete contact
  deletecontact(id:number){
    return this.http.delete<contact>("http://localhost:3000/posts/"+id)
  }

  //fetch data
  fetchdata(id:number){
    return this.http.get<contact>("http://localhost:3000/posts/"+id)

  }
  //update
  updatecontact(data:contact, id:number){

    return this.http.put<contact>("http://localhost:3000/posts/"+id,data)
  }

  //contact us
  contactus(data:contactus){
    return this.http.post<contactus>("http://localhost:3000/contactus", data)
  }

 //getcontactus
  displaycontactus(){
    return this.http.get<contactus>("http://localhost:3000/contactus")
  }
   // delete contact us form
  deletequery(id:number){
    return this.http.delete<contact>("http://localhost:3000/contactus/"+id)
  }
}
