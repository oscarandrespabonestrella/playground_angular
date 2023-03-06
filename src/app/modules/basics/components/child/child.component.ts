import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommService } from '../../services/comm-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() name: string = "";

  @Input('nick') nickName: string = "";

  private _nameWitInterceptor: string = "";
  @Input() 
  get nameWithInterceptor(): string {
    return this._nameWitInterceptor;
  }

  set nameWithInterceptor(value: string) {
    this._nameWitInterceptor = value.replace('test', '');
  }

  @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  confirmMission$ = this.commService.missionConfirmed$;


  emitAlert(message: string){
    alert(message);
  }

  buttonClicked(){
    this.clicked.emit(true);
  }
  
  announceMission(){
    this.commService.announceMission("Go to the moon");
  }

  constructor(private commService: CommService ) { }

  ngOnInit(): void {

    this.announceMission();
  }

}
