import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ScoreService } from '../../../../service/score.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input() value : string;

  public list : any ;
  displayedColumns : string[] = ['email','score'];
  DataSource = null;

  constructor(private ScoreService : ScoreService) {
  }

  ngOnInit(): void {
    if(this.value != null){
      this.ScoreService.getList(this.value).subscribe(aux =>{
        this.list = aux;
        this.list = this.list.sort((n1,n2) =>{
          if(n1.score < n2.score){
            return 1;
          }

          if(n1.score > n2.score){
            return -1;
          }

          return 0;
        });
        this.DataSource = new MatTableDataSource(this.list);
        this.DataSource.paginator = this.paginator;
      });
    }
  }

}
