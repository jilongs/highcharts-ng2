import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventBusService } from './services/eventbus.service';
import { PinEventCountComponent } from './reports/pin-event-count/components/pin-event-count/pin-event-count.component';
import {PinEventCountChartDirective} from "./reports/pin-event-count/directives/pin-event-count-chart/pin-event-count-chart.directive";
import {EADPCommonChartComponent} from "./reports/pin-event-count/components/eadp-chart/eadp-chart.component";
@NgModule({
    declarations: [
        AppComponent,
        PinEventCountComponent,
        PinEventCountChartDirective,
      EADPCommonChartComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [EventBusService ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
