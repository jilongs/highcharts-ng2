/**
 * Created by jilongs on 5/26/17.
 */
export class XAxis {
  title:string;
  type:string;
  categories:string[];
  format(currentOption){
    if(this.title){
      currentOption['title']['text'] = this.title;
    }
    if(this.categories){
      currentOption.categories = this.categories;
    }
    if(this.type){
      currentOption['type'] = this.type;
    }
  }
}
