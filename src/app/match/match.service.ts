import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Record } from './match-table/match-table.component';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Record[]> {
    return this.http.get('https://www.dontouch.ch/json/cc.json')
      .pipe(
        map((resp: any) => Object.values(resp.doc[0].data.matches).map(
          (match: any) => {
            return {
              id: match._id,
              homeTeam: match.teams.home.name,
              awayTeam: match.teams.away.name,
              date: match.time.date,
              time: match.time.time,
              homeGoals: match.result.home,
              awayGoals: match.result.away
            };
          }
        ))
      );
  }

}
