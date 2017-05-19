import {HighchartsStatic} from "./highchart.service";
import {ModuleWithProviders, NgModule} from "@angular/core";
import {EADPCommonChartComponent} from "./eadp-chart.component";
const CHART_DIRECTIVES: any[] = [
  EADPCommonChartComponent
];

@NgModule({
  declarations: [CHART_DIRECTIVES],
  exports: [CHART_DIRECTIVES]
})
export class ChartModule {
  static forRoot(highchartsStatic: HighchartsStatic, ...highchartsModules: Array<Function>): ModuleWithProviders {
    // Plug highcharts modules
    highchartsModules.forEach((module) => {
      module(highchartsStatic)
    });
    console.log(highchartsStatic);

    return {
      ngModule: ChartModule,
      providers: [
        { provide: HighchartsStatic, useValue: highchartsStatic }
      ]
    }
  }
}
export {
  EADPCommonChartComponent
}

