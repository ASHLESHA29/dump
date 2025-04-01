import { Component } from '@angular/core';

@Component({
  selector: 'app-emotional',
  templateUrl: './emotional.component.html',
  styleUrls: ['./emotional.component.scss']
})
export class EmotionalComponent {
  people = [
    { id:1, name:'Aarav Sharma', profession:'Rate: ₹300/hr', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:2, name:'Neha Verma', profession:'Rate: ₹400/hr', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:3, name:'Rohan Mehta', profession:'Rate: ₹600/hr', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:4, name:'Simran Khanna', profession:'Rate: ₹500/hr', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
  ];

  constructor(){}

  bookNow(person:any){
    const googleFormLink = 'https://forms.gle/EmNsy4d47wz6Q8D1A';

    window.open(googleFormLink,'_blank');
  }
}
