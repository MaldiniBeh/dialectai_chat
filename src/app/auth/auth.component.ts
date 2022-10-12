import { ChatService } from './../services/chat.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginData!: FormGroup
  constructor(private serviceChat: ChatService, private route: Router) { }

  ngOnInit(): void {
    this.resetForm()
  }
  onAuthenticate() {
    this.serviceChat.OnsetUser(this.loginData.value)
    const user = this.serviceChat.OngetUser()
    user ? this.route.navigate(['/', 'chat']) : null
  }
  resetForm() {
    const geneId = new Date().getMilliseconds()
    const geneImg = Math.ceil(Math.random() * 7);
    this.loginData = new FormGroup({
      id: new FormControl(geneId),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      img: new FormControl(geneImg)
    })
  }

}
