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
    if(this.data){
      seriesObject['data'] = this.data;
    }
    if(this.type){
      seriesObject['type'] = this.type;
    }
    return seriesObject;
  }
}
export class TimeSeries extends Series{
  data: number[][];
  format():Object{
    var seriesObject = { };
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
    if(this.data){
      seriesObject['data'] = this.data;
    }
    if(this.type){
      seriesObject['type'] = this.type;
    }
    return seriesObject;
  }
}
