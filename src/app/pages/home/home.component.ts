import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor( private api:ApiService){}

ngOnInit(){
  this.fetchData()
}
data:any
fetchData(){
  this.api.getData().subscribe((response:any)=>{
    this.data = response;
  }
  )}

}
