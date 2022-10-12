import { Chat, User } from './../chatinterface';
import { ChatService } from './../services/chat.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  isDark = true;
  unbscription: Subscription[] = []
  messageList: Chat[] = []
  messageData!: FormGroup
  getUser!: User
  oldMessage!:string
  constructor(private serviceChat: ChatService) { }

  ngOnInit(): void {
    this.serviceChat.socket.emit('load')
    this.getUser = this.serviceChat.OngetUser()
    this.resetForm()
    this.getMessage()
    this.realTime()
   this.getMessageRealTime()
    }
  resetForm() {
    this.messageData = new FormGroup({
      id: new FormControl(this.getUser.id),
      message: new FormControl(null, [Validators.required])
    })
  }
  getMessage() {
   const subs = this.serviceChat.ongetMessage().subscribe((data: Chat[]) =>  this.messageList = [...data] )
      this.unbscription.push(subs)
  }

  getMessageRealTime() {
    const realtime = this.serviceChat.ongetMessageRealTime().subscribe((data: Chat[]) => {
      this.messageList = [...data]
          })
          this.unbscription.push(realtime)
   }

  sendMessage() {
    this.serviceChat.onSendMessage(this.messageData.value)
   this.oldMessage = this.messageData.value.message
    this.resetForm()
  }
  realTime(){
    const fetch =  interval(1000).subscribe(()=>{
        this.serviceChat.onSendMessageRealTime()
         })
     this.unbscription.push(fetch)
    }


  ngOnDestroy(): void {
    if (this.unbscription.length) this.unbscription.forEach((el)=>el.unsubscribe())
  }
}
