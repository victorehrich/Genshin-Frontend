import { Component, OnInit } from '@angular/core';
import { CharactersHomeInterface } from 'src/app/interfaces/characters/charactersHome.interface';
import { charactersConst } from '../characters/characters.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent implements OnInit{

  //TO DO colocar o tipo certo
  character?:CharactersHomeInterface
  constructor(
    private route: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    this.character = charactersConst.find(c => c.name == this.route.snapshot.paramMap.get('characterName'))
  }
}
