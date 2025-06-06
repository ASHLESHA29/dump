import { Component } from '@angular/core';
import { formatCurrency } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-beauty-treatment',
  templateUrl: './beauty-treatment.component.html',
  styleUrls: ['./beauty-treatment.component.scss']
})
export class BeautyTreatmentComponent {
  people = [
    { id:1, name:'The Beauty Lounge', profession:'\nskincare(Rs.150/-)\n makeup(starting Rs.150/-)\n maicure(starting Rs.100/-)\n padicure(starting Rs.100/-)\n hair styling(starting Rs.100/-)', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:2, name:'Glamour & Glow', profession:'\nmakeup(starting Rs.150/-)\n maicure(starting Rs.100/-)\n padicure(starting Rs.100/-)\n hair styling(starting Rs.100/-)', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:3, name:'Nature’s Touch Salon', profession:'\nskincare(Rs.150/-)\n makeup(starting Rs.150/-)\n maicure(starting Rs.100/-)\n padicure(starting Rs.100/-)', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:4, name:'Herbal Glow Studio', profession:'\nskincare(Rs.150/-)\n makeup(starting Rs.150/-)\n padicure(starting Rs.100/-)\n hair styling(starting Rs.100/-)', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
  ];
  peoples = [
    { id:1, name:'name 1', profession:'--------', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:2, name:'name 2', profession:'---------', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:3, name:'name 3', profession:'----------', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:4, name:'name 4', profession:'---------', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
  ]

  constructor(){}

  bookNow(person:any){
    const googleFormLink = 'https://forms.gle/JNYX7kmhYgYGY8zy6';

    window.open(googleFormLink,'_blank');
  }
}
