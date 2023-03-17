import { AscencionTalentInterface } from "./ascencionTalente.interface"
import { TalentsInterface } from "./talents.interface"

export interface PassivesInterface{
    utilityPassive: TalentsInterface
    ascencionPassive:AscencionTalentInterface[]
}