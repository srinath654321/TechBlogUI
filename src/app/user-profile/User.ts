import { Certification } from './../certification/Certification';
import { SkillExp } from './../skill/SkillExp';
import { Education } from './../education-details/Education';
import { WorkExp } from './../work-experience/WorKExp';

export interface User {
    fullName:string;
    email: string;
    role: string;
    address: string;
    phone: string;
    about: string;
    workexperiences: Array<WorkExp>;
    skills: Array<SkillExp>;
    certifications: Array<Certification>;
    education: Array<Education>;
}