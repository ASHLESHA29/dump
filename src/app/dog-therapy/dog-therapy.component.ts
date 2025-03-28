import { Component } from '@angular/core';

@Component({
  selector: 'app-dog-therapy',
  templateUrl: './dog-therapy.component.html',
  styleUrls: ['./dog-therapy.component.scss']
})
export class DogTherapyComponent {
  people = [
    { id:1, name:'Golden Retriever', profession:'-------------', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:2, name:'Labrador Retriever', profession:'----------', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:3, name:'Shih Tzu', profession:'---------', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:4, name:'Pomeranian', profession:'----------', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
  ];

  constructor(){}

  bookNow(person:any){
    const googleFormLink = "https://forms.gle/ZKL8rMHyojuqtzLj9";

    window.open(googleFormLink,'_blank');
  }
}
