import { HighchartsService } from './highchart.service';

export function initChart(highchartsService : HighchartsService, type : string) {
  const Highcharts = highchartsService.getHighchartsStatic();

  if (!Highcharts) {
    throw new Error('Base Highcharts module should be set via ChartModule.init');
  }
  console.log(Highcharts);
  if (!Highcharts[type]) {
    throw new Error(`${type} is unknown chart type.`);
  }

  var opts = {
    chart: {
      height: 550,
      type: "line",
      spacing: 50,
      //marginTop: 150,
      borderRadius: 50,
      //backgroundColor: "#F5F5F5",
      style: {
        fontFamily: 'Montserrat'
      }

    },
    exporting: {
      enabled: false
    },

    //colors: [
    //    "#FF7171",
    //    "#FFAE72",
    //    "#7DB0EF",
    //    "#68C9BF"
    //],

    title: {},
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
        point: {
          events: {

          }
        }
      }

    },
    tooltip: {
      crosshairs: {
        color: '#CBDCE6',
        dashStyle: 'solid',
        width: 1
      },
      // useHTML: true,
      // formatter: function () {
      //     return "<div class='tooltipx'>Testing " + this.x + "</div>";
      // },
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderColor: '#E6E6E6',
      borderRadius: 10,
      borderWidth: 1,
      shadow: false //,
      //shared: true
    },

    xAxis: {
      categories: [],
      tickWidth: 0,
      tickLength: 0,
      labels: {
        style: {
          color: '#A8A8A8'
        },
        step: 1
      }
      //tickInterval: 5
    },
    yAxis: {
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
    },
    legend: {
      enabled: false
    },
    rangeSelector: {
      enabled: false
    },

    navigator: {
      enabled: false
    },

    scrollbar: {
      enabled: false
    },

    credits: {
      enabled: false
    }
  };
  return new Highcharts['Chart'](opts);
}
