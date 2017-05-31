import {Component} from '@angular/core';
import {EventBusService} from "./services/eventbus.service";
import {XAxis} from "./reports/pin-event-count/components/eadp-chart/XAxis";
import {
  Series, BasicSeries, PieSeries, PieDataPoint,
  TimeSeries
} from "./reports/pin-event-count/components/eadp-chart/Series";
import {RenderType, ChartType} from "./reports/pin-event-count/components/eadp-chart/constants";
import {Http, Response} from "@angular/http";

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
  pieChartType: ChartType = ChartType.pie;
  tsChartType: ChartType = ChartType.areaspline;
  pieSeries: Series[];
  tsSereis: Series[];
  http:Http;
  basicID:string;
  pieID:string;
  tsID:string;

  constructor(private eventbus: EventBusService, http: Http) {
    this.http = http;
    this.options = {
      title: {text: 'chart selection event example'},
      chart: {zoomType: 'x'},
      series: [{data: [29.9, 71.5, 106.4, 129.2, 45, 13, 120],}]
    };

    this.init();
  }
  init(){
    this.initPie();
    this.initBasic();
    this.http.get('http://api.dashboard.lightning.data.ea.com/gdt/gain/527001/hour/ps4/ffa17ps4-fut-coin/all')
      .map((res: Response) => res.json())
      .subscribe(res =>{
        this.initTSSeries(res);
      });
    console.log("init finished");
  }
  initTSSeries(data){
    this.tsSereis = [];
    var currentSeries = new TimeSeries();
    currentSeries.name = 'USD to EUR';
    currentSeries.type = ChartType.area;
    currentSeries.data = data;
    this.tsSereis.push(currentSeries);
    this.eventbus.emit('eadp-chart.render', this.tsSereis, this.tsID);
  }

  initPie(){
    this.pieSeries = [];
    var currentSeries = new PieSeries();
    this.pieSeries.push(currentSeries);
    currentSeries.colorByPoint = true;
    currentSeries.data = [];

    var pieDataPoint = new PieDataPoint();
    pieDataPoint.name = 'Microsoft Internet Explorer';
    pieDataPoint.y = 56.33;
    currentSeries.data.push(pieDataPoint);

    pieDataPoint = new PieDataPoint();
    pieDataPoint.name = 'Chrome';
    pieDataPoint.y = 24.03;
    pieDataPoint.sliced = true;
    pieDataPoint.selected = true;
    currentSeries.data.push(pieDataPoint);

    pieDataPoint = new PieDataPoint();
    pieDataPoint.name = 'Firefox';
    pieDataPoint.y = 10.38;
    currentSeries.data.push(pieDataPoint);

    pieDataPoint = new PieDataPoint();
    pieDataPoint.name = 'Safari';
    pieDataPoint.y = 4.77;
    currentSeries.data.push(pieDataPoint);

    pieDataPoint = new PieDataPoint();
    pieDataPoint.name = 'Opera';
    pieDataPoint.y = 0.91;
    currentSeries.data.push(pieDataPoint);

    pieDataPoint = new PieDataPoint();
    pieDataPoint.name = 'Proprietary or Undetectable';
    pieDataPoint.y = 0.2;
    currentSeries.data.push(pieDataPoint);


  }
  initBasic(){
    this.xAxis = [];
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

    this.chartType = ChartType.line;
  }


  onClickApply() {
    console.log('click apply ' + this.options);
    var series = {
      name: 'Added',
      data: [12000, 6948, 6105, 16248, 6989, 16816, 16274, 28111]
    };
    this.eventbus.emit('eadp-chart.addSeries', series, this.basicID);
  }
}
