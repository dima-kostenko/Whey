import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.css']
})
export class ConstructorComponent implements OnInit {
  fruit: any[] = [];
  drink: any[] = [];
  egg: any[] = [];
  fruitB: boolean = false;
  drinkB: boolean = false;
  eggB: boolean = false;
  res: number;
  resA: number;
  resB: number;
  resC: number;
  trash: any[] = [];
  bask: any[] = [];
  constructor(private priceService: ServiceService) { }

  addFruit(name){
    this.fruit.push(name);
  }
  addDrink(name){
    this.drinkB = !this.drinkB;
    if(this.drinkB){
    this.drink.push(name);
    }else if(this.drinkB === false){
    this.drink.splice(name, 1);
    }
  }
  addEgg(name){
    this.eggB = !this.eggB;
    if(this.eggB){
    this.egg.push(name);
    }else if(this.eggB === false){
    this.egg.splice(name, 1);
    }
  }
  count(){
    this.resA = this.fruit.length * 10;
    this.resB = this.drink.length * 5;
    this.resC = this.egg.length * 3;
    this.res = this.resA + this.resB + this.resC;
    this.bask.push(this.fruit, this.egg, this.drink);
  }
  addItem(name: any){
    this.priceService.addProduct(name);
  }

  addNum(){         
    alert('Added to basket');
}
  ngOnInit() {
    this.trash = this.priceService.getBasket();
  }
  

}
