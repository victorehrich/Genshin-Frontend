import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // TO DO recuperar essas infos do banco de dados
  items =[{
    label:"Characters",
    path:"/characters",
    icon:"charactes"
  },{
    label:"Teams",
    path:"/",
    icon:""
  },{
    label:"Builds",
    path:"/",
    icon:""
  },{
    label:"Elements",
    path:"/",
    icon:""
  },{
    label:"Weapons",
    path:"/",
    icon:""
  },{
    label:"Artifacts",
    path:"/",
    icon:""
  },{
    label:"Banners",
    path:"/",
    icon:""
  },{
    label:"Domain",
    path:"/",
    icon:""
  },{
    label:"Alchemy",
    path:"/",
    icon:""
  }]

  constructor() {}
}








