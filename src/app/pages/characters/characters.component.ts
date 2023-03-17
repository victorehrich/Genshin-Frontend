import { Component, OnInit } from '@angular/core';
import { ElementsEnum } from 'src/app/enums/elements.enums';
import { GenderEnum } from 'src/app/enums/gender.enum';
import { locationEnum } from 'src/app/enums/location.enum';
import { NumberOFStarsEnum } from 'src/app/enums/numberOfStars.enum';
import { WeaponEnum } from 'src/app/enums/weapon.enum';
import { CharactersHomeInterface } from 'src/app/interfaces/characters/charactersHome.interface';
import { capitalize } from 'src/app/utils/captalize.helpers';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit{
  characters: CharactersHomeInterface[] = [{
    name: "Kazuha",
    element: capitalize(ElementsEnum[ElementsEnum.ANEMO]),
    numberOfStars: capitalize(NumberOFStarsEnum[NumberOFStarsEnum.FIVE]),
    weaponType: capitalize(WeaponEnum[WeaponEnum.SWORD]),
    gender: capitalize(GenderEnum[GenderEnum.ARROMBARDO]),
    location: capitalize(locationEnum[locationEnum.INAZUMA])
  },{
    name: "Bennett",
    element: capitalize(ElementsEnum[ElementsEnum.PYRO]),
    numberOfStars: capitalize(NumberOFStarsEnum[NumberOFStarsEnum.FOUR]),
    weaponType: capitalize(WeaponEnum[WeaponEnum.SWORD]),
    gender: capitalize(GenderEnum[GenderEnum.ARROMBARDO]),
    location: capitalize(locationEnum[locationEnum.MONDSTADT])
  }]
  constructor() {}
  ngOnInit(): void {
    console.log(this.characters);
  }

}
