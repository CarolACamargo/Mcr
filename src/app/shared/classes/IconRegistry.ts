import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

export class IconRegistry{
    constructor(
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer,
      ){}
    
    addIcon(nome: string){
        this.matIconRegistry.addSvgIcon(
            nome,
            this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${nome}.svg`)
        );
    }
}