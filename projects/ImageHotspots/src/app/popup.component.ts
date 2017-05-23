
import { Component, OnInit, Input } from '@angular/core';

import { Popup } from './popup';
import { PopupService } from './popup.service';

@Component({
	selector: 'my-popup',
	templateUrl: './popup.component.html',
	providers: [ PopupService ],
	styleUrls: ['./popup.component.css']
})

export class PopUpComponent implements OnInit {
	title = "Why u not working!";
	popups: Popup[];
	errorMessage: string;
	@Input() hotspotID: number;

	constructor(
		private popupService: PopupService,
	) { }
	
	ngOnInit(): void {
	this.getPopUps();
	}
	
	getPopUps() {
		this.popupService
		this.popupService.getPopups()
			.subscribe(
			popups => this.popups = popups,
			error => this.errorMessage = <any>error
		);
	}

	setPopUp = function(popup: Popup) {
        return {    
					top : popup.top + '%',
					left: popup.left + '%',
        }
	};
}