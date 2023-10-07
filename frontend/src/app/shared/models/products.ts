export class Products { 
    Id?: number;
    article: number = 0;
    productName: string = "";
    price: number = 0;
    quantity: number = 0;
    description: string = "";
    manufacturer: string = "";
    colour: string = "";
    hashtags?: Array<string> = [];
}