import { locationEnum } from "src/app/enums/location.enum";
import { ElementsEnum } from "../../enums/elements.enums";
import { GenderEnum } from "../../enums/gender.enum";
import { NumberOFStarsEnum } from "../../enums/numberOfStars.enum";
import { WeaponEnum } from "../../enums/weapon.enum";
import { BuildInterface } from "../items/build.interface";
import { constelationInterface } from "./constelation.interface";

export interface CharactersInterface{
    name: string;
    element: ElementsEnum;
    numberOfStars: NumberOFStarsEnum;
    weaponType: WeaponEnum;
    build?: BuildInterface;
    gender: GenderEnum
    location: locationEnum
    constelations: constelationInterface
}