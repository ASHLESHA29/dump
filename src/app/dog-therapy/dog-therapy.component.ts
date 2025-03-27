import { Component } from '@angular/core';

@Component({
  selector: 'app-dog-therapy',
  templateUrl: './dog-therapy.component.html',
  styleUrls: ['./dog-therapy.component.scss']
})
export class DogTherapyComponent {
  people = [
    { id:1, name:'name', profession:'-------------', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:2, name:'name 2', profession:'----------', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:3, name:'name 3', profession:'---------', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:4, name:'name 4', profession:'----------', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
  ];

  constructor(){}

  bookNow(person:any){
    const googleFormLink = "https://forms.gle/ZKL8rMHyojuqtzLj9";

    window.open(googleFormLink,'_blank');
  }
}
