/**
 * Created by jilongs on 5/26/17.
 */

export class YAxis {
  title:string;
  format(currentOption){
    if(this.title){
      currentOption['title']['text'] = this.title;
    }
  }
}
