import { Component, OnInit } from '@angular/core';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-match-table',
  templateUrl: './match-table.component.html',
  styleUrls: ['./match-table.component.css']
})
export class MatchTableComponent implements OnInit {

  public datasource: any = [];


  constructor(private matchService: MatchService) { }


  ngOnInit(): void {
    this.retrieveData();
  }


  private retrieveData() {
    this.matchService.getData().subscribe(
      {
        next: resp => this.datasource = resp,
        error: e => console.error(e)
      }
    );
  }


  removeRecord(id: number) {
    this.datasource = this.datasource.filter((record: any) => id !== record.id);
  }


  addNewRecord() {

  }

}
