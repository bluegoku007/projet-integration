import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { tap } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Produit } from '../produit';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ErrorHandlerService } from '../services/error-handler.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userform: FormGroup;
  app$:Observable<Produit[]>;
  title="produit"
  firstname:string
  lastname:string
  email:string
  phone:string
  password:string
  type:string
  SignupService: any;
  private url:"http://localhost:3000/app";
  httpOptions:{headers:HttpHeaders}={
    headers:new HttpHeaders({"content-type":"application.json"})
  }
  constructor(private errorHandlerService:ErrorHandlerService,private http:HttpClient) { }

  ngOnInit(): void {
    this.userform=new FormGroup({
      firstname1:new FormControl(null,[Validators.required]),
      lastname1:new FormControl(null,[Validators.required]),
      email1:new FormControl(null,[Validators.required]),
      phone1:new FormControl(null,[Validators.required]),
      password1:new FormControl(null,[Validators.required]),
      type1:new FormControl(null,[Validators.required])
    })
  }
  fetchAll(): Observable<Produit[]> {
    return this.SignupService.fetchAll();
  }
  onusercreate(user:{fname:string,lname:string,email:string,phone:string,psw:string,type:string}){
    console.log(user);
   // this.onusercreate.saveUser(user).subscribe((result)=>{
     // console.log(result);
    //})

  }
  post(){
    let url="http://localhost:3000/app"
  this.http.post(url,{
    firstname:this.firstname,
    lastname:this.lastname,
    password:this.password,
    email:this.email,
    phone:this.phone,
    type:this.type,
  }).toPromise().then((data:any)=>{
    console.log(JSON.stringify(data.json))
    alert('details are submitted we will inform you after 48 hours if your account will be listed')
  })
  }
  delete(id: number): void {
    this.app$ = this.SignupService
      .delete(id)
      .pipe(tap(() => (this.app$ = this.fetchAll())));
  }
}
