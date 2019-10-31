import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show:boolean = false;
  open:boolean = false;
  form:boolean = false;

  value: any;

  constructor(private priceService: ServiceService){}

  del(){
    this.value.pop();
    this.open = false;
    setTimeout(() => this.open = true, 100);
  }

  ngOnInit() {
    this.value = this.priceService.getBasket();
  }

}