import { Component } from '@angular/core';

@Component({
  selector: 'app-maid',
  templateUrl: './maid.component.html',
  styleUrls: ['./maid.component.scss']
})
export class MaidComponent {

  people = [
    { id:1, name:'Household Cleaning Services ', profession:'(Rate: ₹400/hr), Regular house cleaning, Deep cleaning, Window and glass cleaning, Laundry and ironing services', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:2, name:'Childcare & Babysitting ', profession:'(Rate: ₹300/hr), Taking care of infants and toddlers, Feeding, bathing, and diaper changing, Engaging in educational and play activities', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:3, name:'Elderly Care Assistance ', profession:'(Rate: ₹300/hr), Assisting with mobility and daily hygiene, Preparing meals and feeding, Medication reminders and companionship', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:4, name:'Home Management & Organization ', profession:'(Rate: ₹400/hr), Decluttering and organizing wardrobes, Managing home inventory and supplies, Seasonal cleaning and maintenance', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
  ];
  // peoples = [
  //   { id:1, name:'name 1', profession:'--------', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
  //   { id:2, name:'name 2', profession:'---------', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
  //   { id:3, name:'name 3', profession:'----------', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
  //   { id:4, name:'name 4', profession:'---------', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
  // ]

  constructor(){}

  bookNow(person:any){
     const googleFormLink = 'https://forms.gle/PHk5qURtqfrkyawVA';
     window.open(googleFormLink,'_blank')
  }


}
