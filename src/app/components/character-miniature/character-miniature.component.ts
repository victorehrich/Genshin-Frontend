import { Component, Input } from '@angular/core';
import { CharactersHomeInterface } from 'src/app/interfaces/characters/charactersHome.interface';

@Component({
  selector: 'app-character-miniature',
  templateUrl: './character-miniature.component.html',
  styleUrls: ['./character-miniature.component.scss']
})
export class CharacterMiniatureComponent {
  @Input() character!: CharactersHomeInterface

  getCharacterUrlImg(){
    return "../../../assets/characters/"+this.character.name+".png"
  }
  getCharacterElementIcon(){
    return "../../../assets/elements/"+this.character.element.toLocaleLowerCase()+"256x256.png"
  }
}
