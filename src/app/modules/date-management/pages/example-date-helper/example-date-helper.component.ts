import { Component, OnInit } from '@angular/core';
import { DateHelperService } from '../../services/date-helper.service';

@Component({
  selector: 'app-example-date-helper',
  templateUrl: './example-date-helper.component.html',
  styleUrls: ['./example-date-helper.component.scss']
})
export class ExampleDateHelperComponent{

  public baseDate: Date;
	public dayDelta: number;
	public formattedDate: string;
	public hourDelta: number;
	public millisecondDelta: number;
	public minuteDelta: number;
	public monthDelta: number;
	public relativeDate: string;
	public secondDelta: number;
	public yearDelta: number;

	private dateHelper: DateHelperService;
	private dateMask: string;

	// I initialize the app component.
	constructor( dateHelper: DateHelperService ) {

		this.dateHelper = dateHelper;

		this.baseDate = new Date();
		this.dayDelta = 0;
		this.hourDelta = 0;
		this.millisecondDelta = 0;
		this.minuteDelta = 0;
		this.monthDelta = 0;
		this.relativeDate = "";
		this.secondDelta = 0;
		this.yearDelta = 0;

		this.dateMask = "yyyy-MM-dd HH:mm:ss.SSS";
		this.formattedDate = "";
		this.relativeDate = "";

	}

	// ---
	// PUBLIC METHODS.
	// ---

	// I get called on every digest.
	// --
	// NOTE: Rather than have an explicit function that has to get called every time a
	// date-delta is adjusted, we're just going to hook into the digest since we know
	// that a new digest will be triggered on every (input) event.
	public ngDoCheck() : void {

		var result = this.baseDate;

		// The .add() function returns a NEW date each time, so we have to keep saving
		// and reusing the result of each call.
		result = this.dateHelper.add( "year", this.yearDelta, result );
		result = this.dateHelper.add( "month", this.monthDelta, result );
		result = this.dateHelper.add( "day", this.dayDelta, result );
		result = this.dateHelper.add( "hour", this.hourDelta, result );
		result = this.dateHelper.add( "minute", this.minuteDelta, result );
		result = this.dateHelper.add( "second", this.secondDelta, result );
		result = this.dateHelper.add( "millisecond", this.millisecondDelta, result );

		this.formattedDate = this.dateHelper.format( result, this.dateMask );
		this.relativeDate = this.dateHelper.fromNow( result );

		console.group( "Angular Digest" );
		console.log( "Date:", this.formattedDate );
		console.log( "Relative Date:", this.relativeDate );

		// Log the diff() for the given date - how much it is LESS THAN the base date.
		console.log(
			"Diff:",
			this.dateHelper.diff( "year", result, this.baseDate ),
			this.dateHelper.diff( "month", result, this.baseDate ),
			this.dateHelper.diff( "day", result, this.baseDate ),
			this.dateHelper.diff( "hour", result, this.baseDate ),
			this.dateHelper.diff( "minute", result, this.baseDate ),
			this.dateHelper.diff( "second", result, this.baseDate ),
			this.dateHelper.diff( "millisecond", result, this.baseDate )
		);

		// Log the days in the given month.
		console.log(
			"Days in month:",
			this.dateHelper.daysInMonth( result.getFullYear(), result.getMonth() )
		);

		console.groupEnd();

	}


}
