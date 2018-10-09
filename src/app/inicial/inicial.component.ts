import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {

  title = 'Inicial';

  openNav() {
    document.getElementById("myMenu").style.width = "50%";
    document.getElementById("myMenu").style.marginTop = "21px";
  }

  closeNav() {
      document.getElementById("myMenu").style.width = "0";
  }

  constructor() { }

  ngOnInit() {
  }

}