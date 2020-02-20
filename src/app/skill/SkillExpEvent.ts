import { SkillExp } from './SkillExp';

export class SkillExpEvent{
    newSkillExp: SkillExp;
    eventType: string;
    oldSkillExp: SkillExp;

    constructor(newSkillExp: SkillExp, eventType: string, oldSkillExp: SkillExp){
        this.newSkillExp =  newSkillExp;
        this.eventType = eventType;
        this.oldSkillExp = oldSkillExp;
    }
}