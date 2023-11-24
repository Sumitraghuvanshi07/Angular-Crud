import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { products } from "../model/products";
import { NgForm } from "@angular/forms";

@Injectable
({
    providedIn:'root'
})
export class ProductService
{
    constructor(private http:HttpClient)
    {

    }
    createProduct(products: {pName:string, desc:string, price:string})
    {
        const headers= new HttpHeaders({'myHeader':'Professor'});
        this.http.post('https://angularbyme-9898-default-rtdb.firebaseio.com/products.json',products,{headers:headers})
        .subscribe((res)=>{
          console.log(res);
          });
    }

    fetchProduct()
    {

    }

    deleteProduct()
    {

    }
    deleteAllProduct()
    {

    }

    updateProducts(id:string, value:products)
    {
        this.http.put('https://angularbyme-9898-default-rtdb.firebaseio.com/products/'+id+'.json', value).subscribe();
    }
}