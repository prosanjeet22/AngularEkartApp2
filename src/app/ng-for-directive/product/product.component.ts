import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input()
  product: {
    title: String;
    model: String;
    imageUrl: String;
    discription: String;
    cost: number;
    instock: number;
    discount: number;
  };
}
