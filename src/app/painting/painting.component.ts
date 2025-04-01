import { Component } from '@angular/core';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.scss']
})
export class PaintingComponent {
  people = [
    { id:1, name:'Paint & Perfection', profession:'(Rate: ₹200/wall) Wall and ceiling painting, Texture and designer wall painting, Stencil and pattern painting, Waterproofing solutions', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:2, name:'The Wall Experts', profession:'(Rate: ₹250/wall), Weather-resistant painting, Anti-dust and heat-resistant coatings, Exterior wall sealing and protection, Roof painting', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:3, name:'Paint & Shine', profession:'(Rate: ₹300/wall), Expert advice on colour selection, Digital preview of wall colours before painting, Theme-based colour combinations', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:4, name:'ColorSplash Studio', profession:'(Rate: ₹350/wall), Touch-up and repainting for faded walls, Annual maintenance packages, Post-painting cleanup and polishing', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
  ];

  constructor(){}

  bookNow(person:any){
    const googleFormLink = 'https://forms.gle/rsg1C935z9ry32766';
  

    window.open(googleFormLink,'_blank');
  }
}
