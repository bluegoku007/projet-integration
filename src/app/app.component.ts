import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  onusercreate(user:{fname:string,lname:string,phone:string,email:string,psw:string,type:string,}){
    console.log(user);

  }
  gotologin(){
    console.log("hello")
    }  
}

