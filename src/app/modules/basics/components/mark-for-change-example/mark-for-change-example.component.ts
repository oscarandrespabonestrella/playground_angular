import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mark-for-change-example',
  templateUrl: './mark-for-change-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarkForChangeExampleComponent implements OnInit {
  
  @Input() data!: Observable<any>;
  aquaticCreatures: string[] = [];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.data.subscribe(newAquaticCreature => {
      this.aquaticCreatures = [...this.aquaticCreatures, ...newAquaticCreature];
      this.cd.markForCheck();
    });
  }

}
