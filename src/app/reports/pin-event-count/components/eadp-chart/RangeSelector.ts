/**
 * Created by jilongs on 5/26/17.
 */
export class RangeSelector{
  buttons:RangeSelectorButton[];
  inputEnabled: boolean;
  selected: number;
  enabled: boolean;
  format(currentOption){
    if(this.inputEnabled){
      currentOption.inputEnabled = this.inputEnabled;
    }
    if(this.enabled){
      currentOption.enabled = this.enabled;
    }
    if(this.selected){
      currentOption.selected = this.selected;
    }
    if(this.buttons){
      currentOption.buttons = this.buttons;
    }
  }
}
export class RangeSelectorButton{
  type: TimeUnits;
  count: number;
  text: string;
  onclick?: any;
}
export enum TimeUnits{
  MILLI_SECOND = <any>'millisecond',
  SECOND = <any>'second',
  MINUTE = <any>'minute',
  HOUR = <any>'hour',
  DAY = <any>'day',
  WEEK = <any>'week',
  MONTH = <any>'month',
  YEAR = <any>'year',
  YTD = <any>'ytd',
  ALL = <any>'all'
}
