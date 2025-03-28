import { Component } from '@angular/core';

@Component({
  selector: 'app-packers-movers',
  templateUrl: './packers-movers.component.html',
  styleUrls: ['./packers-movers.component.scss']
})
export class PackersMoversComponent {
  people = [
    { id:1, name:'Pack & Go Experts', profession:'-------------', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:2, name:'All-in-One Movers', profession:'----------', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:3, name:'SwiftShift Movers', profession:'---------', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:4, name:'SafeHands Packers', profession:'----------', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
  ];

  constructor(){}

  bookNow(person:any){
    const googleFormLink ='https://forms.gle/QFbsH5jtgnwa9nLSA';


    window.open(googleFormLink,'_blank');
  }
}
