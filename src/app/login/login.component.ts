import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { tap } from 'rxjs';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Produit } from '../produit';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ErrorHandlerService } from '../services/error-handler.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  email:string
  password:string
  constructor(private router:Router,private formBuilder:FormBuilder,private errorHandlerService:ErrorHandlerService,private http:HttpClient) { }


  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/app").subscribe(res=>{
      const user = res.find((a:any)=>{
        console.log(this.loginform.value.email);
        console.log(this.loginform.value.password);
        return a.email === this.loginform.value.email && a.password === this.loginform.value.password
      })
      if(user){
        alert('Login Success');
        this.router.navigate(['dashboard'])
      } else{
        alert('something is wrong')
        
      }
      
    })
  }
  }

