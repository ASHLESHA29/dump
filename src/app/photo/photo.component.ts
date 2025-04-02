import { Component } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {
  people = [
    { id:1, name:'Golden Lens Studio', profession:'(Rate: ₹300/hr)\n\n	Individual and family portraits, Professional headshots & corporate portraits, Maternity and newborn, Fashion & model portfolio shoots', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:2, name:'Timeless Frames', profession:'(Rate: ₹400/hr)\n\n Wedding films & highlight reels, Promotional & corporate videos, Music videos & short films, Social media reels & YouTube content', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:3, name:'The Portrait Gallery', profession:'(Rate: ₹600/hr)\n\n Music videos, Pre-wedding & couple shoots, Baby & kids photography, Pet photography, Conceptual & themed shoots', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:4, name:'Elegant Snapshots', profession:'(Rate: ₹500/hr)\n\n E-commerce and product shoots, Food and beverage photography, Real estate and architectural photography', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
  ];

  constructor(){}

  bookNow(person:any){
    const googleFormLink = 'https://forms.gle/8Ab8jnP7m2HrYsCu9';
  

    window.open(googleFormLink,'_blank');
  }
}
