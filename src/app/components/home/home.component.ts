import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime} from 'rxjs';
import { Book } from 'src/app/core/models/book-response.model';
import { SubjectsService } from 'src/app/core/services/subjects.service';
// import { TrendingSubjectsComponent } from '../trending-subjects/trending-subjects.component';

@Component({
  selector: 'front-end-internship-assignment-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  bookSearch: FormControl;
  allBooks: Book[] = [];

  
  constructor(private subjectService: SubjectsService) {
    this.bookSearch = new FormControl('');
  }
  trendingSubjects: Array<any> = [
    { name: 'JavaScript' },
    { name: 'CSS' },
    { name: 'HTML' },
    { name: 'Harry Potter' },
    { name: 'Crypto' },
  ];

  ngOnInit(): void {
    this.bookSearch.valueChanges
      .pipe(
        debounceTime(300),
      ).
      subscribe((value: string) => {
        console.log(value);
        this.subjectService.getAllBooks(value).subscribe((res) => {
          console.log(res);
          this.allBooks = res?.works;
        }, (err) => {
          console.log(err);
        })
        
      });
    
      this.subjectService.getAllBooks("javascript ").subscribe((res) => {
        console.log(res);
        this.allBooks = res?.works;
      }, (err) => {
        console.log(err);
      })
      
  }

}
