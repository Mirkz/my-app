import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchTableComponent } from './match-table/match-table.component';



@NgModule({
  declarations: [
    MatchTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatchTableComponent
  ]
})
export class MatchModule { }
