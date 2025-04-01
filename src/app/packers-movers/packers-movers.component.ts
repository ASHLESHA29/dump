import { Component } from '@angular/core';

@Component({
  selector: 'app-packers-movers',
  templateUrl: './packers-movers.component.html',
  styleUrls: ['./packers-movers.component.scss']
})
export class PackersMoversComponent {
  people = [
    { id:1, name:'Pack & Go Experts', profession:'(Rate: ₹1300), Household packing (furniture, fragile items), Office packing, Specialized packing (artwork, antiques)', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:2, name:'All-in-One Movers', profession:'(Rate: ₹1500), Safe loading and unloading of goods, Use of proper tools Trained professionals for heavy items', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:3, name:'SwiftShift Movers', profession:'(Rate: ₹1600), Local and long-distance moving, Secure and spacious moving trucks, GPS tracking for real-time updates', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:4, name:'SafeHands Packers', profession:'(Rate: ₹1800), Transit insurance for goods safety, Coverage for damage, loss, or theft, Doorstep pickup and drop-off', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
  ];

  constructor(){}

  bookNow(person:any){
    const googleFormLink ='https://forms.gle/QFbsH5jtgnwa9nLSA';


    window.open(googleFormLink,'_blank');
  }
}
