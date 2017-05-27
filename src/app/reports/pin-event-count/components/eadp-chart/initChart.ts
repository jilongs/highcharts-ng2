import { HighchartsService } from './HighchartsService';

export function initChart(highchartsService : HighchartsService, baseOpts, type : string) {
    const Highcharts = highchartsService.getHighchartsStatic();

    if (!Highcharts) {
        throw new Error('Base Highcharts module should be set via ChartModule.init');
    }
    if (!Highcharts[type]) {
        throw new Error(`${type} is unknown chart type.`);
    }


    console.log(Highcharts, type);
    return new Highcharts[type](baseOpts);
}
