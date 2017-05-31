import {ChartType} from "./constants";
/**
 * Created by jilongs on 5/26/17.
 */

export class Series {
  name:string;
  color:string;
  index: number;
  zIndex: number;
  type: ChartType;
  format():Object{
    var seriesObject = {};
    if(this.color){
      seriesObject['color'] = this.color;
    }
    if(this.name){
      seriesObject['name'] = this.name;
    }
    if(this.index){
      seriesObject['index'] = this.index;
    }
    if(this.zIndex){
      seriesObject['zIndex'] = this.zIndex;
    }
    if(this.type){
      seriesObject['type'] = this.type;
    }
    return seriesObject;
  }
}
export class BasicSeries extends Series{
  data: number[];
  format():Object{
    var seriesObject = super.format();
    if(this.data){
      seriesObject['data'] = this.data;
    }
    return seriesObject;
  }
}
export class TimeSeries extends Series{
  data: number[][];
  format():Object{
    var seriesObject = super.format();
    if(this.data){
      seriesObject['data'] = this.data;
    }
    return seriesObject;
  }
}

export class PieSeries extends Series{
  data: PieDataPoint[];
  colorByPoint: boolean;
  format():Object{
    var seriesObject = super.format();
    if(this.colorByPoint){
      seriesObject['colorByPoint'] = this.colorByPoint;
    }
    if(this.data){
      seriesObject['data'] = this.data;
    }
    return seriesObject;
  }
}

export class PieDataPoint{
  name:string;
  y:number;
  sliced?:boolean;
  selected?: boolean;
}
