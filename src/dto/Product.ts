export interface Price{
    amount:number;
    currency: 'COP' | 'USD'
}

export interface Product{
    id: string;
    name: string;
    brand: string;
    quantity : number;
    price : number;
    isActive: boolean;
    specs?:{
        color?: string;
        size?: string;
        material?: string
    };
    

}