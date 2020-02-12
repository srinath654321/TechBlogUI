export class Education{

    public schoolName: string;
    public yearStarted: string;
    public yearEnded: string;
    public typeOfDegree: string;
    public courseName: string;
    public gpa : number;


    constructor(schoolName: string, yearStarted: string, yearEnded: string, typeOfDegree: string, courseName: string, gpa: number){
        this.schoolName = schoolName;
        this.yearStarted = yearStarted;
        this.yearEnded = yearEnded;
        this.typeOfDegree = typeOfDegree;
        this.courseName = courseName;
        this.gpa = gpa;
    }
}