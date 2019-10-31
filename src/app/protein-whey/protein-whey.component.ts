import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-protein-whey',
  templateUrl: './protein-whey.component.html',
  styleUrls: ['./protein-whey.component.css']
})
export class ProteinWheyComponent implements OnInit {
  trash: any[] = [];
  prod: number[] = [];
  constructor(private priceService: ServiceService) {}

  ngOnInit() {
    this.prod = this.priceService.getPrice();
    this.trash = this.priceService.getBasket();
  }

  addItem(name: any){
    this.priceService.addProduct(name);
  }

  addNum(){         
    alert('Added to basket');
}
}
