import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  First_Name: String = 'prosanjeet';
  Last_Name: String = 'Kumar';
  Age: Number = 24;
  Education: String = 'Mca';
  count: number = 0;

  product = {
    product_name: 'mobile',
    cost: 12000,
    model_number: 'LgPro 123',
    instock: 2,
    getStock: function cost1() {
      return this.cost * this.instock;
    },
  };
  onChangeData(event: any) {
    this.First_Name = event.target.value;
  }
  getDecrement(event: any) {
    this.count--;
  }
  getIncrement(event: any) {
    this.count++;
  }
}
