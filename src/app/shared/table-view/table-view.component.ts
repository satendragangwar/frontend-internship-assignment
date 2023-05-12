import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/book-response.model';
import { SubjectsService } from 'src/app/core/services/subjects.service';

@Component({
  selector: 'front-end-internship-assignment-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent implements OnInit {
  @Input() booksList: Book[] = [];
  @Input() subjectName: string = '';
  books : any;

  ngOnInit(): void {
    this.getAllBooks();
  }
 
  constructor(private subjectService : SubjectsService){}

   getAllBooks(){
      this.subjectService.getAllBooks("JavaScript").subscribe((res) => {
        this.books = res
        console.log(res);
      }, (err) => {
        console.log(err);
      })
   }
}
