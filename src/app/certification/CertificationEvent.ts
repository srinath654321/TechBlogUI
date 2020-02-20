import { Certification } from './Certification';


export class CertificationEvent{
    newCertification: Certification;
    eventType: string;
    oldCertification: Certification;

    constructor(newCertification: Certification, eventType: string, oldCertification: Certification){
        this.newCertification = newCertification;
        this.eventType = eventType;
        this.oldCertification = oldCertification;
    }
}