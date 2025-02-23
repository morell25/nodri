import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  username:string | undefined;

  constructor(private router: Router){}


  onSubmit(event: any) {
    event.preventDefault();
    const navigationDetails: string[] = ['/main'];
    this.router.navigate(navigationDetails, {state: {data: this.username}});
    //console.log(this.username);
  }
}
