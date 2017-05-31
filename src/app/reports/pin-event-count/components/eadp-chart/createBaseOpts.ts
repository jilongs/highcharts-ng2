import {EventEmitter} from '@angular/core';
import {ChartEvent} from './ChartEvent';
import {HighchartsService} from "./HighchartsService";

const chartEvents = [
  //'click', works by default as a native DOM click
  'addSeries',
  'afterPrint',
  'beforePrint',
  'drilldown',
  'drillup',
  'load',
  'redraw',
  'selection'
];



export const defaultXAxis = {
  events: {},
  categories: [],
  tickWidth: 0,
  tickLength: 0,
  labels: {
    style: {
      color: '#A8A8A8'
    },
    step: 1
  },
  title: {
    text: null
  },
  //tickInterval: 5
};

export const defaultYAxis = {
  events: {},
  title: {
    text: null
  },
  opposite: false,
  labels: {
    style: {
      color: '#A8A8A8'
    }
  },
  lineColor: '#DFE1E2'
  // how much y is one interval
  //tickInterval: 40
};

export const defaultRangeSelector = {
  inputEnabled: false, // it supports only days
  selected: 0, // 1 minute
  enabled: false,
  plotOptions: {
    series: {
      stacking: 'normal',
      lineColor: '#666666',
      lineWidth: 1,
      marker: {
        lineWidth: 1,
        lineColor: '#666666'
      }
    }
  }
};

export function createBaseOpts(chartCmp, element, highchartsService : HighchartsService) {
  const Highcharts = highchartsService.getHighchartsStatic();
  let opts = {
    chart: {
      renderTo: element,
      height: 550,
      type: "line",
      spacing: 50,
      borderRadius: 50,
      style: {
        fontFamily: 'Montserrat'
      },
      events: {}
    },
    exporting: {
      enabled: false
    },

    title: {
      text: null
    },
    subtitle: {},
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        marker: {
          radius: 0,
          states: {
            hover: {
              enabled: true,
              lineWidth: 0,
              lineWidthPlus: 0,
              radius: 3,
              radiusPlus: 0
            }
          }
        },
        lineWidth: 3
      },
      series: {
        events: {},
        point: {
          events: {
            // mouseOver: function () {
            //   $(this.series.chart.xAxis[0].labelGroup.element.childNodes[this.x]).css('fill', 'black');
            // },
            // mouseOut: function () {
            //   $(this.series.chart.xAxis[0].labelGroup.element.childNodes[this.x]).css('fill', '#999999');
            // }
          }
        }
      },
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color: (Highcharts['theme'] && Highcharts['theme']['contrastTextColor']) || 'black'
          }
        },
        showInLegend: true
      }

    },
    tooltip: {
      crosshairs: {
        color: '#CBDCE6',
        dashStyle: 'solid',
        width: 1
      },
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderColor: '#E6E6E6',
      borderRadius: 10,
      borderWidth: 1,
      shadow: false //,
    },

    xAxis: [defaultXAxis],
    yAxis: [defaultYAxis],
    legend: {
      enabled: true
    },
    rangeSelector: defaultRangeSelector,

    navigator: {
      enabled: false
    },

    scrollbar: {
      enabled: false
    },
    series:[],

    credits: {
      enabled: false
    }
  } ;
  if (chartCmp) {
    chartEvents.forEach(function (eventName) {
      opts.chart.events[eventName] = opts.chart.events[eventName] || function (event: any) {
          chartCmp[eventName].emit(new ChartEvent(event, this));
        }
    });
  }

  return opts;
}
