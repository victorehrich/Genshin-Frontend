import { ItemInterface } from "./item.interface";

export interface ArtifactsInterface extends ItemInterface{
    set: string
    setBonusOne: string
    setBonusTwo?: string
}