import { Component, OnInit } from '@angular/core';
import { EventBusService } from "../../../../services/eventbus.service";
import { PinEventCountDaoService } from "../../services/pin-event-count-dao/pin-event-count-dao.service";
@Component({
    selector: 'ga-pin-event-count',
    templateUrl: './pin-event-count.component.html',
    styleUrls: ['./pin-event-count.component.css'],
    providers: [PinEventCountDaoService]
})
export class PinEventCountComponent implements OnInit {

    private option:any;

    constructor(private eventbus:EventBusService, pinEventCountDaoService:PinEventCountDaoService) {
    }

    ngOnInit() {
        //this.requestData();
    }

    //requestData() {
    //    this.eventbus.emit('pin-event-count.give-me-data', this.option);
    //}

    onClickApply() {
        console.log('click apply ' + this.option);
        this.eventbus.emit('pin-event-count.give-me-data', this.option);
    }

}
