import { Component } from '@angular/core';

@Component({
  selector: 'app-maid',
  templateUrl: './maid.component.html',
  styleUrls: ['./maid.component.scss']
})
export class MaidComponent {

  people = [
    { id:1, name:'Household Cleaning Services ', profession:'(Rate: ₹400/hr)\n\n Regular house cleaning, Deep cleaning\n Window and glass cleaning\n Laundry and ironing services', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:2, name:'Childcare & Babysitting ', profession:'(Rate: ₹300/hr)\n\n Taking care of infants and toddlers\n Feeding\n bathing\n and diaper changing\n Engaging in educational and play activities', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:3, name:'Elderly Care Assistance ', profession:'(Rate: ₹300/hr)\n\n Assisting with mobility and daily hygiene\n Preparing meals and feeding\n Medication reminders and companionship', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:4, name:'Home Management & Organization ', profession:'(Rate: ₹400/hr)\n\n Decluttering and organizing wardrobes\n Managing home inventory and supplies\n Seasonal cleaning and maintenance', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
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
