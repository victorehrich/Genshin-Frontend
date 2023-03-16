import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'genshin-front';

  icons = [{
    label: "charactes",
    path: "../assets/icons/Icone_Personagens.svg"
  }]
  
  constructor(
    private matIconRegistry: MatIconRegistry,     
    private domSanitizer: DomSanitizer
    ) {
    this.icons.forEach(icon => {
      this.matIconRegistry.addSvgIcon(
        icon.label,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
      );
    });
  }
}
