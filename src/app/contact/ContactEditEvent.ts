import { Contact } from './Contact';
export class ContactEditEvent{
    newContact: Contact;
    oldContact: Contact;

    constructor(newContact: Contact, oldContact: Contact){
        this.newContact = newContact;
        this.oldContact = oldContact;
    }
}