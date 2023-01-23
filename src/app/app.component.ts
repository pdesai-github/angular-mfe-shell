import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shell-container';

  ngOnInit(): void {
    let containerDv = document.getElementById("containerDv");

    // Load web componemt script 
    const script = document.createElement("script");
    script.src = "https://localhost/web-component/cchi-web-component.js";
    containerDv?.appendChild(script);

    //Create web component
    const webCompElement = document.createElement("web-component-root") //web-component-root should be selector of app component of web component app
    webCompElement.setAttribute('state', 'init');
    containerDv?.appendChild(webCompElement);
  }
}
