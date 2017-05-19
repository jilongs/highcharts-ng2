import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {EventBusService} from "../../../../services/eventbus.service";
import * as $ from 'jquery';

@Injectable()
export class PinEventCountDaoService implements OnInit {

    constructor(private http:Http, private eventBus:EventBusService) {
        this.registerGiveMeDataEvent();
    }

    ngOnInit() {
    }

    registerGiveMeDataEvent() {
        console.log('init');
        this.eventBus.on('pin-event-count.give-me-data')
            .subscribe(option => {
                this.getPinEventCount(option);
            });
    }

    getPinEventCount(option:any) {
        console.log('get pin event count received parameters ' + option);
        this.http.get('https://ga.data.ea.com/data-portal/data-portal/pinevents/hourly/?_select=dt&_select=hour&latest=24&_where=%20(source=%27server_nucleus%27)%20AND%20(event_name=%27login%27%20AND%20status=%27success%27)%20%20AND%20game_id=65005')
            .toPromise()
            .then(res => {
                //console.log(res.json());
                this.eventBus.emit('pin-event-count.give-you-data', res.json());
            });

    }
}
