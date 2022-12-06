import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent {


aim="hi arjyun"
data="Enter Account number"
acno=""
pno=""
  userDeatails:any={
    1000:{acno:1000,username:"anu",password:123,balance:0},
    1001:{acno:1001,username:"amal",password:123,balance:0},
    1002:{acno:1002,username:"arun",password:123,balance:0},
    1003:{acno:1003,username:"mega",password:123,balance:0},

  }
  constructor(private router:Router){ }

  login(){
    // alert('Arjyun is here')
   var acno=this.acno
var pno=this.pno
var userDeatails=this.userDeatails

if(acno in userDeatails){
  if(pno==userDeatails[acno]["password"]){
    alert("login success")
    this.router.navigateByUrl('dashboard')
  }
  else{
    alert("incurrect passsword")
  }
}
else{
  alert("incurrrect username")
}
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
}