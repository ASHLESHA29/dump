import { Component } from '@angular/core';

@Component({
  selector: 'app-emotional',
  templateUrl: './emotional.component.html',
  styleUrls: ['./emotional.component.scss']
})
export class EmotionalComponent {
  people = [
    { id:1, name:'name', profession:'-------------', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:2, name:'name 2', profession:'----------', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:3, name:'name 3', profession:'---------', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:4, name:'name 4', profession:'----------', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
  ];

  constructor(){}

  bookNow(person:any){
    const googleFormLink = 'https://forms.gle/EmNsy4d47wz6Q8D1A';

    window.open(googleFormLink,'_blank');
  }
}
