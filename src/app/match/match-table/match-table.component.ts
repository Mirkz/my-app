import { Component, OnInit } from '@angular/core';
import { MatchService } from '../match.service';


export interface Record {
  id: number,
  homeTeam: string,
  awayTeam: string,
  date: string,
  time: string,
  homeGoals: number,
  awayGoals: number
}


@Component({
  selector: 'app-match-table',
  templateUrl: './match-table.component.html',
  styleUrls: ['./match-table.component.css']
})
export class MatchTableComponent implements OnInit {

  public datasource: Record[] = [];


  constructor(private matchService: MatchService) { }


  ngOnInit(): void {
    this.retrieveData();
  }


  private retrieveData(): void {
    this.matchService.getData().subscribe(
      {
        next: resp => this.datasource = resp,
        error: e => console.error(e)
      }
    );
  }


  removeRecord(id: number): void {
    this.datasource = this.datasource.filter((record: any) => id !== record.id);
  }


  addNewRecord(): void {

  }

}
