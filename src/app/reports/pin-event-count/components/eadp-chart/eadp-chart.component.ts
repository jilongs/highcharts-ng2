/**
 * Created by jilongs on 5/18/17.
 */
import { OnInit, ElementRef, Component, Output, EventEmitter, Input } from '@angular/core';
import { EventBusService } from "../../../../services/eventbus.service";
import { HighchartsService } from './highchart.service';
import { initChart } from './initChart';
@Component({
  selector: 'eadp-chart',
  template: '&nbsp;'
})
export class EADPCommonChartComponent implements OnInit {

  private option:any;
  chart: any;
  element: ElementRef;
  highchartsService : HighchartsService;
  @Input() type: string = 'Chart';
  @Output() create = new EventEmitter<any>();

  constructor(private eventbus:EventBusService, element: ElementRef, highchartsService : HighchartsService) {
    this.element = element;
    this.highchartsService = highchartsService;
    console.log(this.highchartsService.getHighchartsStatic());
  }

  ngOnInit() {
    this.registerBroadcastHandler();
    console.log(this.highchartsService.getHighchartsStatic());
    this.chart = initChart(this.highchartsService, this.type);
    this.create.emit(this.chart);
  }


  registerBroadcastHandler() {
    this.eventbus.on('eadp-chart.addSeries')
      .subscribe(message => {

      });
  }

}
