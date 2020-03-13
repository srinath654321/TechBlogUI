import { Contact } from './../contact/Contact';
import { Certification } from './../certification/Certification';
import { SkillExp } from './../skill/SkillExp';
import { Education } from './../education-details/Education';
import { WorkExp } from './../work-experience/WorKExp';

export interface User {
    userId: string,
    summary: string;
    contact: Contact;
    workExperienceList: Array<WorkExp>;
    skillList: Array<SkillExp>;
    certificationList: Array<Certification>;
    educationList: Array<Education>;
}