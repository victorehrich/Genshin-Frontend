import { BasicAttackInterface } from "./basicAttack.interface"
import { PassivesInterface } from "./passives.interface"
import { SkillsInterface } from "./skills.interface"

export interface CharacterTalentInterface{
    attack: BasicAttackInterface,
    elementalSkill: SkillsInterface
    elementalBurst: SkillsInterface
    passives: PassivesInterface
}