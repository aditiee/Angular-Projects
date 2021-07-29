import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { AsideComponent } from './components/aside/aside.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { AngMusicPlayerModule } from  'ang-music-player';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { CommonModule } from  '@angular/common';
import { MaterialModule } from './material.module';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { FooterComponent } from './footer/footer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    MainContentComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    LayoutModule,
    MatListModule,
    AngMusicPlayerModule,
    CommonModule,
    MaterialModule,
    NgxAudioPlayerModule,
    MatCardModule,
    MatGridListModule,
    Ng2SearchPipeModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
