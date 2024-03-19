class Authors{
    authors:string[];
    constructor(auth=[]){
        this.authors=auth;
    }
}
let ob=new Authors();
ob.authors=["veena","meena"];

let newarray=ob.authors;