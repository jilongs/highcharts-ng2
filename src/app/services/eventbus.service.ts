import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

//https://blog.lacolaco.net/post/event-broadcasting-in-angular-2/
interface BroadcastEvent {
    key: string;
    data?: any;
}

@Injectable()
export class EventBusService {
    private _eventBus:Subject<BroadcastEvent>;

    constructor() {
        this._eventBus = new Subject<BroadcastEvent>();
    }

    emit(key:any, data?:any) {
        this._eventBus.next({key, data});
    }

    on(key:string):Observable<string> {
        return this._eventBus.asObservable()
            .filter(event => event.key === key)
            .map(event => event.data);
    }
}
