import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CoreModule } from './core/core.module';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { FilmsState } from './store/films/films.state';
import { environment } from 'src/environments/environment';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx-store/counter.reducer';
import { filmReducer } from './ngrx-store/films/films.reducer';
import { EffectsModule } from '@ngrx/effects';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    NgxsModule.forRoot([FilmsState],  {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    StoreModule.forRoot({ count: counterReducer, films: filmReducer})    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
