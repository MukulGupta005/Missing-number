import { INT_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  n:number;
  k:number;
  l:number;
  a:number;
  b:number;
  lis:number;
  arr = new Array(1);
  find()
  {
    for(this.n=1;this.n<=this.k;this.n++)
    {
      if(this.n%2==0)
      {
        this.l=this.n*this.n-1;
        this.a=this.arr.push(this.l);
      }
      else
      {
        this.l=this.n*this.n+1;
        this.a=this.arr.push(this.l);
      }
    }
      if(this.k in this.arr)
      {
          this.lis=this.arr.indexOf(this.k)
      }
  }
  }
