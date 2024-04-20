import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public product : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
   this.cartService.getProducts()
   .subscribe(res=>{
    this.product = res;
    this.grandTotal = this.cartService.getTotalPrice();
   }) 
  }
  removeItem(item : any){
    this.cartService.removeCartItem(item);
  }
 emptycart(){
  this.cartService.removeAllCart();
 } 

}
