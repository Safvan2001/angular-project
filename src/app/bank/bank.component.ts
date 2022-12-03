import { Component } from '@angular/core';

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

  login(){
    alert('Arjyun is here')
  }
  acnoChange(event:any){
    
    
     this.acno=event.target.value
     console.log(this.acno);
     
}
Pnumber(event:any){
  this.pno=event.target.value
  console.log(this.pno);
  
}


}
