import {XAxis} from "./XAxis";
import {YAxis} from "./YAxis";
import {RangeSelector} from "./RangeSelector";
import {Series} from "./Series";
import {defaultXAxis, defaultYAxis, defaultRangeSelector} from "./createBaseOpts";
import {ChartType} from "./constants";
/**
 * Created by jilongs on 5/26/17.
 */

export function resetXAxis(options, xAxis:XAxis[]){
  if(xAxis){
    options.xAxis = [];
    xAxis.forEach(function (x) {
      var currentXAxis = defaultXAxis;
      x.format(currentXAxis);
      options.xAxis.push(currentXAxis);
    })
  }
}
export function updateXAxis(options, xAxis:XAxis[]){
  if(xAxis){
    xAxis.forEach(function (x) {
      if(x.title){
        options.xAxis[0]['title']['text'] = this.title;
      }
      if(x.categories){
        options.xAxis[0].categories = this.categories;
      }
    })
  }
}

export function resetYAxis(options, yAxis:YAxis[]){
  if(yAxis){
    options.yAxis = [];
    yAxis.forEach(function (y) {
      var currentYAxis = defaultYAxis;
      y.format(currentYAxis);
      options.yAxis.push(currentYAxis);
    })
  }
}

export function updateYAxis(options, yAxis:YAxis[]){
  if(yAxis){
    yAxis.forEach(function (y) {
      if(y.title){
        options.yAxis[0]['title']['text'] = this.title;
      }
    })
  }
}

export function resetRangeSelector(options, rangeSelector:RangeSelector){
  if(rangeSelector){
    var currentRangeSelector = defaultRangeSelector;
    rangeSelector.format(currentRangeSelector);
    options.rangeSelector = currentRangeSelector;
  }
}

export function updateRangeSelector(options, rangeSelector:RangeSelector){
  resetRangeSelector(options, rangeSelector);
}
export function setSeries(options, series: Series[]){
  if(series){
    options.series = [];
    series.forEach(function(currentSeries){
      var seriesObject = currentSeries.format();
      options.series.push(seriesObject);
    })
  }
}

export function setChartType(options, chartType: ChartType){
  if(chartType){
    options.chart.type = chartType;
  }
}

export function setChartTitle(options, chartTitle: string){
  if(chartTitle){
    options.title = chartTitle;
  }
}
