import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {
  gifs:any[] = [];

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    // getting gifs
    this.dataService.getTrendingGifs().subscribe((response :any)=>{
      this.gifs = response.data
      console.log(response)
    })
  }

}
