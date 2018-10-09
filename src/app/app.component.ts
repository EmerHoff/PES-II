import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  openNav() {
    document.getElementById("myMenu").style.width = "50%";
    document.getElementById("myMenu").style.marginTop = "21px";
}

closeNav() {
    document.getElementById("myMenu").style.width = "0";
}


}

