export class Produit {
    id?:string;
    firstname?:string;
    lastname?:string;
    email?:string;
    phone?:string;
    type?:string;
    constructor(args:Produit={}){
        this.id=args.id;
        this.firstname=args.firstname;
        this.email=args.email;
        this.lastname=args.lastname;
        this.phone=args.phone;
        this.type=args.type;
}
}