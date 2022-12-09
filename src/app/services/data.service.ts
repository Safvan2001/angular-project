import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentuser=""
  currentacno=""

  constructor() { }


  userDeatails:any={
    1000:{acno:1000,username:"anu",password:123,balance:0,transaction:[]},
    1001:{acno:1001,username:"amal",password:123,balance:0,transaction:[]},
    1002:{acno:1002,username:"arun",password:123,balance:0,transaction:[]},
    1003:{acno:1003,username:"mega",password:123,balance:0,transaction:[]},

  }

register(acno:any,uname:any,psw:any){
var userDeatails=this.userDeatails
if(acno in userDeatails){
  return false
}
else{
  userDeatails[acno]={acno,username:uname,password:psw,balance:0,transaction:[]}
  return true
}


}
login(acno:any,pno:any){
  // alert('Arjyun is here')
 
var userDeatails=this.userDeatails

if(acno in userDeatails){
if(pno==userDeatails[acno]["password"]){
  // ac number
  this.currentacno=acno
  // alert("login success")
  this.currentuser=userDeatails[acno]["username"]
return true
  
}
else{
  // alert("incurrect passsword")
  return false
}
}
else{
// alert("incurrrect username")
return false
}
}
deposit(acno:any,passsword:any,amount:any){
  var userDeatails=this.userDeatails
  var amnt=parseInt(amount)

  if(acno in userDeatails){
    if(passsword==userDeatails[acno]["passsword"]){
    userDeatails[acno]["balance"]+=amnt
    userDeatails[acno]["transaction"].push({type:"CREDIT",amount:amnt})
    return userDeatails[acno]["balance"]
  }else{
    return false
  }
}else{
  return false
}
  }
  withdraw(acno:any,password:any,amount:any){
    var userDeatails=this.userDeatails
    var amnt=parseInt(amount)
    if(acno in userDeatails){
      if(password==userDeatails[acno]["passsword"]){
        if(amnt<=userDeatails[acno]["balance"]){
          userDeatails[acno]["balance"]-=amnt
          userDeatails[acno]["transaction"].push({type:"DEBIT",amount:amnt})
          return userDeatails[acno]["balance"]
        }
        else{
          alert("insufficient balance")
          return false
        }
      }else{
        alert("incurrect password")
        return false
      }
    }
    else{
      alert("incurrect ac number")
      return false
    }

  }
gettransaction(acno:any){
  return this.userDeatails[acno]["transaction"]
}

}

