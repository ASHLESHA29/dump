import { Component } from '@angular/core';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.scss']
})
export class PaintingComponent {
  people = [
    { id:1, name:'Paint & Perfection', profession:'(Rate: ₹200/wall)\n\n Wall and ceiling painting,\n Texture and designer wall painting,\n Stencil and pattern painting,\n Waterproofing solutions', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:2, name:'The Wall Experts', profession:'(Rate: ₹250/wall)\n\n Weather-resistant painting,\n Anti-dust and heat-resistant coatings,\n Exterior wall sealing and protection,\n Roof painting', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:3, name:'Paint & Shine', profession:'(Rate: ₹300/wall)\n\n Expert advice on colour selection,\n Digital preview of wall colours before painting,\n Theme-based colour combinations', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:4, name:'ColorSplash Studio', profession:'(Rate: ₹350/wall)\n\n Touch-up and repainting for faded walls,\n Annual maintenance packages,\n Post-painting cleanup and polishing', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
  ];

  constructor(){}

  bookNow(person:any){
    const googleFormLink = 'https://forms.gle/rsg1C935z9ry32766';
  

    window.open(googleFormLink,'_blank');
  }
}
