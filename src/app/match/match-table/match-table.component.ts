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
    let teams = this.datasource.map(record => record.homeTeam).concat(this.datasource.map(record => record.awayTeam));
    teams = Array.from(new Set(teams)); // remove duplicates
    const homeTeam = teams[Math.round(Math.random() * (teams.length - 1))]; // pick random team among the previous ones
    let awayTeam: string;
    do {
      awayTeam = teams[Math.round(Math.random() * (teams.length - 1))];
    } while (homeTeam === awayTeam);

    const now = new Date();
    
    this.datasource.push({
      id: this.datasource[this.datasource.length - 1].id + 2,
      homeTeam: homeTeam,
      awayTeam: awayTeam,
      date: `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear() - 2000}`,
      time: `${now.getHours()}:${now.getMinutes()}`,
      homeGoals: Math.round(Math.random() * 5),
      awayGoals: Math.round(Math.random() * 5)
    });
  }

}
