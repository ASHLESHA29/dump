import { Component } from '@angular/core';

@Component({
  selector: 'app-cook',
  templateUrl: './cook.component.html',
  styleUrls: ['./cook.component.scss']
})
export class CookComponent {
  people = [
    { id:1, name:'The Hungry Hive', profession:'-BREAKFAST:\n Masala Dosa, Aloo Paratha, Poha(Rate: ₹150/hr)\n\n MAINS:\n Dal Makhani, Palak Paneer, Veg Biryani, Chole Bhature. (Rate: ₹200/hr) \n \nDESSERTS:\n Gulab Jamun, Rasmalai, Chocolate Brownie(Rate: ₹200/hr),', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:2, name:'Sizzle & Drizzle', profession:'SOUPS & SALADS:\n Tomato Basil Soup, Caesar Salad(Rate: ₹200/hr)\n\n MAINS:\n Sizzling Paneer Steak, Thai Green Curry with Jasmine Rice, Spinach Ricotta Pasta(Rate: ₹250/hr) \n \n DESSERTS:\n Molten Lava Cake, Cheesecake, Tiramisu', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:3, name:'The Royal Platter', profession:'Starters:\n Chicken Tikka, Fish Amritsari, Mutton Seekh Kebab(Rate: ₹200/hr),\n\n Mains: Butter Chicken, Hyderabadi Biryani, Malabar Fish Curry(Rate: ₹200/hr),\n\n Breads & Rice:\n Garlic Naan, Lachha Paratha, Basmati Rice(Rate: ₹250/hr)' , image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:4, name:'Dine & Delight', profession:'Mains:\n Grilled Salmon, Chicken Stroganoff, Beef Steak with Pepper Sauce(Rate: ₹270/hr), \n\nSides:\n Mashed Potatoes, Sauteed Veggies, Garlic Butter Rice (Rate: ₹300/hr),\n\n	Desserts:\n Chocolate Mousse, Blueberry Cheesecake, Apple Crumble(Rate: ₹260/hr)', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
  ];
  peoples = [
    { id:1, name:'name 1', profession:'--------', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:2, name:'name 2', profession:'---------', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:3, name:'name 3', profession:'----------', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
    { id:4, name:'name 4', profession:'---------', image:'../../assets/beauty-treatment/Screenshot 2024-09-24 140413.png'},
  ]

  constructor(){}

  bookNow(person:any){
    const googleFormLink = "https://forms.gle/qiq4dWkUHWkgZwCo7";

    window.open(googleFormLink,'_blank');
  }
}
