import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
login(e){
 e.preventDefault();
 const target= e.target;
 const name = target.querySelector('#nm').value;
 const password = target.querySelector('#ps').value;

if(name === password){
    this.router.navigateByUrl('task');
  }
}
}
