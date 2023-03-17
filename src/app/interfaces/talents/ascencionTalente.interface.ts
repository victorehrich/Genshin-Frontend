import { AscencionRankEnum } from "src/app/enums/ascencionRank.enum";
import { TalentsInterface } from "./talents.interface";

export interface AscencionTalentInterface extends TalentsInterface{
    ascencionRank?:AscencionRankEnum
}