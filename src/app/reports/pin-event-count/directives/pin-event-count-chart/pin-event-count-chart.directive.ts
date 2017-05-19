import { Directive,ElementRef,OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import {EventBusService} from "../../../../services/eventbus.service";

@Directive({
    selector: '[ga-pin-event-count-chart]'
})
export class PinEventCountChartDirective implements OnInit {

    private chart:any;
    private applyElement:any;


    private defaultConfig = {

        title: {
            text: 'Solar Employment Growth by Sector, 2010-2016'
        },

        subtitle: {
            text: 'Source: thesolarfoundation.com'
        },

        chart: {
            height: 550,
            type: "line",
            spacing: 50,
            //marginTop: 150,
            borderRadius: 50,
            //backgroundColor: "#F5F5F5",
            style: {
                fontFamily: 'Montserrat'
            },
            renderTo: null
            //renderTo: this.applyElement
        },

        yAxis: {
            title: {
                text: 'Number of Employees'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                pointStart: 2010
            }
        },

        series: [{
            name: 'Installation',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        }, {
            name: 'Manufacturing',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        }, {
            name: 'Sales & Distribution',
            data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
        }, {
            name: 'Project Development',
            data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
        }, {
            name: 'Other',
            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
        }]

    };

    constructor(private el:ElementRef, private eventBus:EventBusService) {
        this.applyElement = el.nativeElement;
    }

    ngOnInit() {
        //console.log(this.el);

        this.defaultConfig.chart.renderTo = this.applyElement;
        this.chart = new Highcharts['Chart'](this.defaultConfig);
        this.registerGiveYouDataEvent();
    }

    registerGiveYouDataEvent() {
        this.eventBus.on('pin-event-count.give-you-data')
            .subscribe(data => {
                //console.log('hello world ' + message + ' from pin event count chart');
                console.log(data);
            });
    }

}
