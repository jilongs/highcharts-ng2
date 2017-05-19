import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventBusService } from './services/eventbus.service';
import { PinEventCountComponent } from './reports/pin-event-count/components/pin-event-count/pin-event-count.component';
import {PinEventCountChartDirective} from "./reports/pin-event-count/directives/pin-event-count-chart/pin-event-count-chart.directive";
import {HighchartsService, HighchartsStatic} from "./reports/pin-event-count/components/eadp-chart/highchart.service";
import {ChartModule} from "./reports/pin-event-count/components/eadp-chart/index";
@NgModule({
    declarations: [
        AppComponent,
        PinEventCountComponent,
        PinEventCountChartDirective,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
      ChartModule.forRoot(require('highcharts'))
    ],
    providers: [EventBusService, HighchartsService, HighchartsStatic],
    bootstrap: [AppComponent]
})
export class AppModule {
}
