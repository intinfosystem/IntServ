import { Component } from '@angular/core';
import { Fruit } from "./fruit";
import '../assets/css/styles.css';

@Component({
    selector: 'fruit-basket',
    templateUrl: './fruit-basket.component.html'
  })
export class FruitBasketComponent {

    public splash: boolean = false;
    public fruits: Fruit[] = [
        {
            "name": "Apple",
            "price": 1900,
            "priceUnit": "kg",
            "id": 1
        },
        {
            "name": "Custered Apple",
            "price": 180,
            "priceUnit": "Dozen",
            "id": 2
            
        },
        {
            "name": "Oranges",
            "price": 140,
            "priceUnit": "kg",
            "id": 3
        },
        {
            "name": "Guava",
            "price": 90,
            "priceUnit": "kg",
            "id": 4
        },
        {
            "name": "Grapes",
            "price": 50,
            "priceUnit": "kg",
            "id": 5
        },
    ];
    selectedFruits: Fruit[] = [];

    selectFruit(fruit: Fruit): void {
        fruit.quantity = 1;
        this.selectedFruits.push(fruit);
    }
 
    onQuantityChange(newQuantity: number, fruit: Fruit): void {
        fruit.quantity = newQuantity;
    }
}