import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { contactus } from '../contactmodels';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit{
  data:any|contactus[];
  constructor(private api:ApiService){}
  ngOnInit(): void {
      this.showcontactus();
  }
  showcontactus(){
    this.api.displaycontactus().subscribe(res=>{

      this.data =res;
      console.log(res)
      
    })
  }
  delete(id:number){
    this.api.deletequery(id).subscribe(res=>{
      alert("message have deleted")
      this.showcontactus();
    })
  }

  logout(){
    localStorage.removeItem("adminlogin")
    
  }

}
