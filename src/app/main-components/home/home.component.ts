import { Component, OnInit } from '@angular/core';
import { AppModel } from 'src/app/models/appModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  apps:AppModel[]= [
    {name:"Todo App",primaryColor:'#ff6793',secondaryColor:"rgba(0, 0, 0, .8)",description:"A basic todo app",srcImage:"./assets/images/todo-app.png",routerLink:"todo-app"},
    {name:"BMI Calculator",primaryColor:'#a9c25d',secondaryColor:"#AAAAAA",description:"You can calculate your body mass index.", srcImage:"./assets/images/bmiCalculator-app.png",routerLink:"bmicalculator-app"},
    {name:"Random Quotes",primaryColor:'#8d9db6',secondaryColor:"#b6bcc2cb",description:"You can generate a random quote for sharing", srcImage:"./assets/images/randomQuotes-app.png",routerLink:"randomquotes-app"},
    {name:"Weather App",primaryColor:'white',secondaryColor:"#4B515D",description:"You can get weather information from this application.", srcImage:"./assets/images/weather-app.png",routerLink:"weather-app"}

  ]
  ngOnInit(): void {
  }

}
