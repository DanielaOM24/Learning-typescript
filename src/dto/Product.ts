
export interface Dimensions {
    width: number;
    height: number;
    depth: number;
    weight?: number; 
  }
  

  export interface Product {
    name: string;
    brand: string;
    quantity: number;
    price: number;
    currency: "COP" | "USD";
    isActive: boolean;
  
 //other propierties
    category: string;
    imageUrl: string;
    createdAt: Date;
    tags?: string[];
  
   
    dimensions?: Dimensions;
  }
  