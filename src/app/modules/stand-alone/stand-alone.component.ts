import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvolvePipe } from 'src/app/standalone/pipes/evolve.pipe';
import { MatButtonModule } from '@angular/material/button';

@Component({
  
  standalone: true,
  imports: [CommonModule, EvolvePipe, MatButtonModule],
  templateUrl: './stand-alone.component.html',
  styleUrls: ['./stand-alone.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StandAloneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
