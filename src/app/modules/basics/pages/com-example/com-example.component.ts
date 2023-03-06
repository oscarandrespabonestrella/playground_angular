import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../../components/child/child.component';
import { CommService } from '../../services/comm-service.service';

@Component({
  selector: 'app-com-example',
  templateUrl: './com-example.component.html',
  styleUrls: ['./com-example.component.scss']
})
export class ComExampleComponent implements OnInit, AfterViewInit {

  @ViewChild(ChildComponent, {static: false}) childComponent!: ChildComponent;

  childButtonClicked : boolean = false;

  annauncedMission$ = this.commService.missionAnnounced$;

  buttonClicked(wasClicked: boolean){
    this.childButtonClicked = wasClicked;
  }

  launchAlert(){
    this.childComponent.emitAlert("testing viwchild");
  }

  confirmMission(){
    this.commService.confirmMission("Mission confirmed: 2 astronauts");
  }

  constructor(private commService: CommService) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    this.confirmMission();
  }

}
