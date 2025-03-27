import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  googleFormUrl: string = 'https://forms.gle/SWbp99z2poARwpoA9';

  openGoogleForm(){
    window.open(this.googleFormUrl,'_blank');
  }
}
