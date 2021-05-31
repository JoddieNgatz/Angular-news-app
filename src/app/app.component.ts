import { Component } from '@angular/core';
import { NewsApiService } from './services/news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-app';

  theArticles!: Array<any>;
  theSources!: Array<any>;

  constructor(private newsapi: NewsApiService) {
    //news api service instance
    console.log('news api on app.component constructor called');         
  }
  
  ngOnInit() {
    //load articles

  this.newsapi.initializeArticles().subscribe( (data:any) => this.theArticles = data['articles']);
    //load news sources
  this.newsapi.initializeSources().subscribe( (data:any) => this.theSources = data['sources']);  
  }
  
  searchArticles(source: string | String) {
    //retrieves article sources
    console.log("selected source is: "+source);
    this.newsapi.getArticlesByID(source).subscribe( (data:any) => this.theArticles = data['articles']);
  }
}