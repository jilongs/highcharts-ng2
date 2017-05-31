import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import {isUndefined} from "util";

//https://blog.lacolaco.net/post/event-broadcasting-in-angular-2/
interface BroadcastEvent {
    key: string;
    data?: any;
  target?: string;
  source?: string;
}

@Injectable()
export class EventBusService {
    private _eventBus:Subject<BroadcastEvent>;

    constructor() {
        this._eventBus = new Subject<BroadcastEvent>();
    }

    emit(key:string, data?:any, target?:string, source?:string) {
        this._eventBus.next({key,  data, target, source});
    }

    on(key:string, target?:string, source?:string):Observable<any> {
        return this._eventBus.asObservable()
            .filter(event => event.key === key)
            .filter(event => event.target === target || isUndefined(target))
            .filter(event => event.source === source || isUndefined(source))
            .map(event => event);
    }

}
