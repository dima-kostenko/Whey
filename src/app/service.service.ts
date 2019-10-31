import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private price: number[] = [40, 45, 50];
  private basket: any[] = [];

getPrice(): number[] {
    return this.price;
}

getBasket(){
  return this.basket;
}

addProduct(name: string){        
  this.basket.push(name);
}

}
