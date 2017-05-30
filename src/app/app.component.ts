import {Component} from '@angular/core';
import {EventBusService} from "./services/eventbus.service";
import {XAxis} from "./reports/pin-event-count/components/eadp-chart/XAxis";
import {Series, BasicSeries} from "./reports/pin-event-count/components/eadp-chart/Series";
import {RenderType, ChartType} from "./reports/pin-event-count/components/eadp-chart/constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  options: Object;
  xAxis:XAxis[];
  series: Series[];
  chartType: ChartType;

  constructor(private eventbus: EventBusService) {
    this.options = {
      title: {text: 'chart selection event example'},
      chart: {zoomType: 'x'},
      series: [{data: [29.9, 71.5, 106.4, 129.2, 45, 13, 120],}]
    };

    this.init();
  }

  init(){
    this.xAxis = []
    var x = new XAxis();
    x.title = "test";
    x.categories = ['a','b','c','d','e','f','g'];
    this.xAxis.push(x);
    this.series = [];
    var currentSeries = new BasicSeries();
    currentSeries.name = 'Installation';
    currentSeries.data = [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175];
    this.series.push(currentSeries);
    currentSeries = new BasicSeries();
    currentSeries.name = 'Manufacturing';
    currentSeries.data = [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434];
    this.series.push(currentSeries);
    currentSeries = new BasicSeries();
    currentSeries.name = 'Sales & Distribution';
    currentSeries.data = [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387];
    this.series.push(currentSeries);
    currentSeries = new BasicSeries();
    currentSeries.name = 'Project Development';
    currentSeries.data = [null, null, 7988, 12169, 15112, 22452, 34400, 34227];
    this.series.push(currentSeries);
    currentSeries = new BasicSeries();
    currentSeries.name = 'Other';
    currentSeries.data = [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111];
    this.series.push(currentSeries);

    this.chartType = ChartType.column;
  }


  onClickApply() {
    console.log('click apply ' + this.options);
    var series = {
      name: 'Other',
      data: [12000, 6948, 6105, 16248, 6989, 16816, 16274, 28111]
    };
    this.eventbus.emit('eadp-chart.addSeries', series);
  }
}
