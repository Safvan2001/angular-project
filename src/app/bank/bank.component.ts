import { Component } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import {  Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent {


aim="Welcome"
data="Enter Account number"

 
  constructor(private router:Router,private ds:DataService,private fb:FormBuilder){ }
  loginForm = this.fb.group({acno:["",[]],pno:[""]})
    
  login(){
    
    // alert('Arjyun is here')
   var acno=this.loginForm.value.acno
   var pno=this.loginForm.value.pno

   const result=this.ds.login(acno,pno)
   if(result){
    alert("login success")
    this.router.navigateByUrl("dashboard")

   }
   else{
    alert("incurrect username or password")
   }



  }
// var userDeatails=this.userDeatails

// if(acno in userDeatails){
//   if(pno==userDeatails[acno]["password"]){
//     alert("login success")
//     this.router.navigateByUrl('dashboard')
//   }
//   else{
//     alert("incurrect passsword")
//   }
// }
// else{
//   alert("incurrrect username")
// }
//   }
// login(a:any,b:any){
 
//   this.acno=a.value
//   this.pno=b.value
  
//  var acno=this.acno
// var pno=this.pno
// var userDeatails=this.userDeatails

// if(acno in userDeatails){
// if(pno==userDeatails[acno]["password"]){
//   alert("login success")
// }
// else{
//   alert("incurrect passsword")
// }
// }
// else{
// alert("incurrrect username")
// }


//   }
// //   acnoChange(event:any){
    
    
// //      this.acno=event.target.value
// //      console.log(this.acno);
     
// // }
// // Pnumber(event:any){
// //   this.pno=event.target.value
// //   console.log(this.pno);
  
// }

}