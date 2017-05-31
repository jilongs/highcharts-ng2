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
import {Series, BasicSeries, TimeSeries, PieSeries} from "./Series";
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
  @Input() chartType?: ChartType = ChartType.line;
  @Input() series?: Series[];
  @Input() xAxis?: XAxis[];
  @Input() yAxis?: YAxis[];
  @Input() chartTitle?: string;
  @Input() rangeSelector?: RangeSelector;
  @Output() idChange = new EventEmitter<string>();

  idValue?: string;
  @Input()
  get id(){
    return this.idValue;
  }

  set id(val){
    this.idValue = val;
    this.idChange.emit(this.idValue);
  }

  private renderType?: RenderType = RenderType.HIGHCHARTS;
  private chart: any;
  private element: any;
  private type: string = 'Chart';


  ngOnInit() {
    this.checkID();
    this.setupConfig();
    this.init();
  }

  setupConfig(){
    this.checkSeriesType();
    this.highchartsService.init(this.renderType);
    this.baseOpts = createBaseOpts(null, this.element.nativeElement, this.highchartsService);
    this.checkCharType();
    resetXAxis(this.baseOpts, this.xAxis);
    resetYAxis(this.baseOpts, this.yAxis);
    resetRangeSelector(this.baseOpts, this.rangeSelector);
    setSeries(this.baseOpts, this.series);
    setChartType(this.baseOpts, this.chartType);
    setChartTitle(this.baseOpts, this.chartTitle);
  }
  checkID(){
    console.log(this.id);
    if(!this.id){
      this.id = ('eadp-chart' + Math.floor(Math.random() * 1000) );
      console.log(this.id);
    }
  }
  checkCharType(){
    console.log(this.renderType);
    if (this.renderType === RenderType.HIGHSTOCK){
      this.baseOpts.useHighStocks = true;
    }else{
      this.baseOpts.useHighStocks = false;
    }
  }

  checkSeriesType(){
    if(this.series && this.series[0] instanceof TimeSeries){
      this.renderType = RenderType.HIGHSTOCK;
      this.type = 'StockChart';
    }else{
      this.renderType = RenderType.HIGHCHARTS;
      this.type = 'Chart';
    }
  }


  registerBroadcastHandler() {
    this.eventBus.on('eadp-chart.addSeries', this.id)
      .subscribe(event => {
        console.log(event);
        console.log(this.chart);
        var chart = this.chart;

        chart.addSeries(event.data, true);
        // if (chart.scroller.baseSeries) {
        //   chart.scroller.setBaseSeries();
        // }
      });
    this.eventBus.on('eadp-chart.render', this.id)
      .subscribe(event => {
        this.series = event.data;
        this.setupConfig();
        this.init();
        console.log(this.chart);
      });
  }

  highchartsService: HighchartsService;
  private baseOpts: any;

  private init() {
    this.chart = initChart(this.highchartsService, this.baseOpts, this.type);
    this.registerBroadcastHandler();
  }


  constructor(element: ElementRef, highchartsService: HighchartsService, private eventBus: EventBusService) {
    this.element = element;
    this.highchartsService = highchartsService;
  }

}
