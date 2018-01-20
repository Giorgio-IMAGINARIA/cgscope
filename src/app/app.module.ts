// Angular modules
import { NgModule } from '@angular/core';
import { Renderer } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
// Routing
import { routing } from './app.routing';
// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatTabsModule,
  MatFormFieldModule,
  MatSortModule,
  MatRadioModule,
  MatCardModule,
  MatIconModule,
  MatDialogModule,
  MatTableModule,
  MatSliderModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatChipsModule,
  MatListModule,
  MatInputModule,
  MatTooltipModule,
  MatMenuModule,
  MatSelectModule
} from '@angular/material';
// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard.component';
import { MedianPanelComponent } from './components/medianPanel.component';
import { MousePanelComponent } from './components/mousePanel.component';

// External modules
import 'hammerjs';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    MatListModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatChipsModule,
    MatTooltipModule,
    MatButtonModule,
    MatMenuModule,
    MatSliderModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatRadioModule,
    MatSortModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule
  ],

  declarations: [
    // Components
    AppComponent,
    DashboardComponent,
    MedianPanelComponent,
    MousePanelComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }