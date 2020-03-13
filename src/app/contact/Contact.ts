export class Contact {
    fullName:string;
    email: string;
    role: string;
    address: string;
    phoneNumber: string;
    imageData: string

    constructor(fullName: string, email: string, role: string, address: string, phoneNumber: string, imageData: string) {
        this.fullName = fullName;
        this.email = email;
        this.role = role;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.imageData = imageData;
    }
}