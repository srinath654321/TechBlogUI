import { WorkExp } from './WorKExp';
export class WorkExpEvent{
    public newWorkExp: WorkExp;
    public eventType: string;
    public oldWorkExp: WorkExp;

    constructor(newWorkExp: WorkExp, eventType: string, oldWorkExp: WorkExp){
        this.newWorkExp = newWorkExp;
        this.eventType = eventType;
        this.oldWorkExp = oldWorkExp;
    }


}