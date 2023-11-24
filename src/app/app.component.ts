import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';
import { products } from './model/products';
import { ProductService } from './Service/product.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'HTTP-Angular';
  allProducts:products[]=[];
  @ViewChild('productsForm') form:NgForm;
  editMode: boolean=false;
  currentId:any;
  constructor(private http:HttpClient, private productservice:ProductService)
  {

  }

  ngOnInit()
  {
    this.getProducts();
  }

  onProductsfetch()
  {
    this.getProducts();
  }

  onProduct(products: {pName:string, desc:string, price:string})
  {
    if(!this.editMode)
    
     // console.log(products);
      this.productservice.createProduct(products);
      // const headers= new HttpHeaders({'myHeader':'Professor'});
      // this.http.post('https://angularbyme-9898-default-rtdb.firebaseio.com/products.json',products,{headers:headers})
      // .subscribe((res)=>{
      //   console.log(res);
      //   });
    
   
    else 
    
      this.productservice.updateProducts(this.currentId,products);
    
  }

  private getProducts()
  {
    let params= new HttpParams().set('sumit', 'Raghuvanshi')
    .append('uday','singh')
    .append('uday','3')
    if(!params.has('page'))
    {
      params=params.set('White','Walker');
    }
    console.log(params.getAll('uday'));
    
    console.log(params.keys());
    console.log(params.toString());
    
    params=params.delete('uday','3')

    const header=new HttpHeaders()
    .set('Access-Control-Allow-Origin','*')
    this.http.get<{[key:string]:products}>('https://angularbyme-9898-default-rtdb.firebaseio.com/products.json', {'headers': header, params:params})
    .pipe(map((val)=>{
      const products=[];
      for(const key in val)
      {
        if(val.hasOwnProperty(key))
        {
          products.push({ ...val[key], id: key})
        }
      }
      return products;
    }))
    .subscribe((val)=>{
      console.log(val);
      this.allProducts=val;
    })
  }

  onDelete(id:string)
  {
    let header= new HttpHeaders();
    header=header.append('myHeader1', 'value1');
    header=header.append('myHeader2', 'value2')
      this.http.delete('https://angularbyme-9898-default-rtdb.firebaseio.com/products/'+id+'.json', {headers:header})
      .subscribe();
  }
  OnDeleteAll()
  {
    this.http.delete('https://angularbyme-9898-default-rtdb.firebaseio.com/products.json').subscribe();
  }

  onEditClicked(id: string)
  {
    this.currentId=id;
   let currentProduct= this.allProducts.find((p)=>{return p.id===id});
   console.log(currentProduct);

   this.form.setValue({
    pName:currentProduct.pName,
    desc:currentProduct.desc,
    price:currentProduct.price
   });

   this.editMode=true;
  }
}
