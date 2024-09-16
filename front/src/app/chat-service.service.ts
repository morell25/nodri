import { Injectable } from '@angular/core';
import { io } from "socket.io-client";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket = io('http://localhost:3000');
  username:string|undefined;

  logIn(username:string){
    this.socket.emit("clientData", { username: username});
  }

  disconnectSocket() {
    this.socket.disconnect();
   }

   sendMsg(msg:String){
    this.socket.emit("sendMsg", { idSocket: this.socket.id, msg: msg, userSendMsg:  this.username});
   }


}