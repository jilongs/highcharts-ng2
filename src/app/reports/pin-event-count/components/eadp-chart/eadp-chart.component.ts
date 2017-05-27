/**
 * Created by jilongs on 5/18/17.
 */
import {OnInit, ElementRef, Component, Output, EventEmitter, Input} from '@angular/core';
import {EventBusService} from "../../../../services/eventbus.service";
import {HighchartsService} from './HighchartsService';
import {initChart} from './initChart';
import {createBaseOpts} from './createBaseOpts';
import {XAxis} from "./XAxis";
import {YAxis} from "./YAxis";
import {Series} from "./Series";
import {RangeSelector} from "./RangeSelector";
import {
  updateXAxis, updateYAxis, updateRangeSelector, setSeries, resetXAxis,
  resetYAxis, resetRangeSelector, setChartType, setChartTitle
} from "./updateOptions";
import {ChartType, RenderType} from "./constants";
@Component({
  selector: 'eadp-chart',
  template: '&nbsp;',
  providers: [HighchartsService]
})
export class EADPCommonChartComponent implements OnInit {
  @Input() renderType?: RenderType = RenderType.HIGHCHARTS;
  @Input() chartType?: ChartType = ChartType.line;
  @Input() series?: Series[];
  @Input() xAxis?: XAxis[];
  @Input() yAxis?: YAxis[];
  @Input() chartTitle?: string;
  @Input() rangeSelector?: RangeSelector;

  private chart: any;
  private element: any;
  private type: string = 'Chart';


  ngOnInit() {
    this.checkType();
    this.baseOpts = createBaseOpts(null, this.element.nativeElement);
    resetXAxis(this.baseOpts, this.xAxis);
    resetYAxis(this.baseOpts, this.yAxis);
    resetRangeSelector(this.baseOpts, this.rangeSelector);
    setSeries(this.baseOpts, this.series);
    setChartType(this.baseOpts, this.chartType);
    setChartTitle(this.baseOpts, this.chartTitle);
    this.init();
  }

  checkType(){
    if(this.renderType === RenderType.HIGHCHARTS){
      this.type = 'Chart';
    }else if(this.renderType === RenderType.HIGHSTOCK){
      this.type = 'StockChart';
    }else{
      this.type = 'Chart';
    }
  }


  registerBroadcastHandler() {
    this.eventBus.on('eadp-chart.addSeries')
      .subscribe(event => {
        console.log(event);
        console.log(this.chart);
        var chart = this.chart;

        chart.addSeries(event.data, true);
        // if (chart.scroller.baseSeries) {
        //   chart.scroller.setBaseSeries();
        // }
      });
    this.eventBus.on('eadp-chart.render')
      .subscribe(event => {

        // Object.keys(event)
        // chart.addSeries(event.data, true);
        // if (chart.scroller.baseSeries) {
        //   chart.scroller.setBaseSeries();
        // }
      });
  }

  highchartsService: HighchartsService;
  private baseOpts: any;

  private init() {
    this.highchartsService.init(this.renderType);
    console.log(typeof this.xAxis);
    this.chart = initChart(this.highchartsService, this.baseOpts, this.type);
    this.registerBroadcastHandler();
  }


  constructor(element: ElementRef, highchartsService: HighchartsService, private eventBus: EventBusService) {
    this.element = element;
    this.highchartsService = highchartsService;
  }

}
