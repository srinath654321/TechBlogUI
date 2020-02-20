import { Education } from './Education';
export class EducationEvent {

    public newEducation: Education;
    public eventType: string;
    public oldEducation: Education

    constructor(newEducation: Education, eventType: string, oldEducation: Education){
        this.newEducation = newEducation;
        this.eventType = eventType;
        this.oldEducation = oldEducation;
    }

}