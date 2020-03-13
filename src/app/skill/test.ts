import { SkillExp } from './SkillExp';
export class test {

    skillArray: Array<SkillExp> = [];

    openSkillDialog() {
        let oldSkillArray = this.skillArray;
        console.log("old skill data", oldSkillArray);
        let skillExp = new SkillExp("Java", 5);
        let newSkillArray = this.skillArray.push(skillExp);
        console.log("new skill arrray" , newSkillArray);
    }

    save() {
        this.openSkillDialog();
    }
}