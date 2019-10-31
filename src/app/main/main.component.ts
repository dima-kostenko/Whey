import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  prod: number[] = [];
  constructor(private priceService: ServiceService) {}

  ngOnInit() {
    this.prod = this.priceService.getPrice();
  }

}
