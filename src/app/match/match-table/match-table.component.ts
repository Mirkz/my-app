import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-match-table',
  templateUrl: './match-table.component.html',
  styleUrls: ['./match-table.component.css']
})
export class MatchTableComponent implements OnInit, OnDestroy {

  private subscription: any = undefined;
  private intervalId: any = undefined;
  public updateTimer = 1;

  public datasource: any = undefined;

  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
    // retrieve data every 5 seconds
    this.intervalId = setInterval(
      () => {
        this.updateTimer -= 1;
        if (this.updateTimer === 0) {
          this.retrieveData();
          this.updateTimer = 5;
        }
      },
      1000
    );
  }


  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }


  private retrieveData() {
    if (this.subscription)
      this.subscription.unsubscribe();
    this.subscription = this.matchService.getData().subscribe(
      {
        next: resp => this.datasource = resp,
        error: e => console.error(e)
      }
    );
  }

}
