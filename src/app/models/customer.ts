export type Customer ={
    id?:string;
    productName?:string;
    name?:string;
    phone?:string;
    address?:{
        street?:string;
        city?:string;
        state?:string;
        zipCode?:number;
    }
}