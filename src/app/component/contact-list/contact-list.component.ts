import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { contact, contactus } from '../contactmodels';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  data:any | contact[];
  searchText:any;
  isloading=true;
  constructor(private api:ApiService, private formBuilder:FormBuilder){}
  contactusform!:FormGroup;
  ngOnInit(): void {
    this.getcontact();
    this.contactusform = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    })
  }
  getcontact(){
    setTimeout(() => {
      this.api.getcontact().subscribe(res=>{
        this.data=res;
        this.isloading=false;
      })
      
    }, 2000);
   
  }
  //delete
  // delete(id:number){
  //   this.api.deletecontact(id).subscribe(res=>{
  //     alert("contact deleted successfully!!")
  //     this.getcontact();
  //   })
  // }
  delete(id: number) {
    this.api.deletecontact(id).subscribe(
      res => {
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Contact deleted successfully!',
          timer: 2000,
          showConfirmButton: false
        });
        this.getcontact();
      },
      err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          timer: 2000,
          showConfirmButton: false
        });
      }
    );
  }
  

  //logout
  logout(){
    localStorage.removeItem("logindata")
  }

  contacustsubmit(data:contactus){
    this.api.contactus(data).subscribe((res=>{
      alert("data submited oh!");
      this.contactusform.reset();
    }))
  }
}
