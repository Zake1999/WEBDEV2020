import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxing',
  templateUrl: './boxing.component.html',
  styleUrls: ['./boxing.component.css']
})
export class BoxingComponent implements OnInit {

  clothes = [
   {
   "id":1,
   "name":"T-shirt1"
   },
   {
   "id":2,
   "name":"Jeans"
   },
   {
   "id":3,
   "name":"T-shirt3"
   },
   {
   "id":4,
   "name":"T-shirt4"
   },
   {
   "id":5,
   "name":"T-shirt5"
   }
   ]
  constructor() { }

  ngOnInit(): void {
  }

}
