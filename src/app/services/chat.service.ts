import { Chat, User } from './../chatinterface';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(public socket: Socket) { }

  onSendMessage(data: Chat): void {
    this.socket.emit('message', data)
  }
  onSendMessageRealTime(): void {
    this.socket.emit('realtime')
  }
  ongetMessage() {
    return new Observable((observer: Observer<Chat[]>) => {
      this.socket.on('message', (message: Chat[]) => {
           observer.next(message)
      })
    })
  }
  ongetMessageRealTime() {
    return new Observable((observer: Observer<Chat[]>) => {
      this.socket.on('realtime', (realtime: Chat[]) => {
               observer.next(realtime)
      })
    })
  }

  OngetUser() {
    const getUser = localStorage.getItem('cahtUser')
    if (getUser) {
      return JSON.parse(getUser)
    }
  }
  OnsetUser(User: User) {
    return localStorage.setItem('cahtUser', JSON.stringify(User))
  }
}
