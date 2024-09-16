import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../chat-service.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit, OnDestroy{
  constructor(private router: Router, private chatService:ChatService) {}
  receivedData: string | undefined;
  username:string|undefined;

  ngOnInit(): void {
    if (history.state.data == null) {
      const navigationDetails: string[] = ['/home'];
      this.router.navigate(navigationDetails);
    }
    this.chatService.logIn(history.state.data)
  }
  ngOnDestroy(): void {
    this.chatService.disconnectSocket()
  }

  onSubmit(event:any){

  }

  unirte(){
    console.log("hola");
    
  }




}
