import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconRegistry } from 'src/app/shared/classes/IconRegistry';

class IconeToolbar{
  constructor(
    public nomeIcone: string,
    public click: () => void,
  ){}
  
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  icones = [
    new IconeToolbar('instagram', this.navegarInstagram), 
    new IconeToolbar('whatsapp', this.navegarWhatsApp),
    new IconeToolbar('email', this.navegarEmail),

  ]

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitzer: DomSanitizer,
    ){
      let iconRegistry = new IconRegistry(matIconRegistry, domSanitzer);

      this.icones.forEach(icone => {
        iconRegistry.addIcon(icone.nomeIcone);
      });
  }

  ngOnInit(): void {
  }

  navegarInstagram(){
    window.open("https://www.instagram.com/mcrsorocaba/")
  }

  navegarWhatsApp(){
    window.open("https://wa.me/5515981142096")
  }

  navegarEmail(){
    window.open("https://wa.me/5515981142096")
  }
}
