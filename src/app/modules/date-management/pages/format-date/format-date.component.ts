import { formatDate } from '@angular/common';
import { AfterViewInit, Component, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

interface Example {
	mask: string;
	result: string;
}

@Component({
  selector: 'app-format-date',
  templateUrl:"./format-date.component.html",
  styleUrls: ['./format-date.component.scss']
})
export class FormatDateComponent  implements AfterViewInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource<any>([]);

  public examples: Example[];
	public localID: string;
	public now: Date;

		// --
	// NOTE: Out of the box, Angular ships with the "en-US" local for formatting. If you
	// want to use other locales, you have to add the localize package.
	constructor( @Inject( LOCALE_ID ) localID: string ) {

		this.localID = localID;
		this.now = new Date();
		this.examples = [];

		var masks = [
			// Built-in mask aliases.
			"short",
			"medium",
			"long",
			"full",
			"shortDate",
			"mediumDate",
			"longDate",
			"fullDate",
			"shortTime",
			"mediumTime",
			"longTime",
			"fullTime",
			// Years.
			"yy",
			"yyyy",
			// Months.
			// --
			// NOTE: Month mask are UPPER CASE so as not to conflict with minutes.
			"M",
			"MM",
			"MMM",
			"MMMM",
			// Days.
			"d",
			"dd",
			// Weekdays.
			"E",
			"EEEE",
			// AM / PM.
			"aa",
			// Hours.
			"h",
			"hh",
			// 24-Hours version.
			"H",
			"HH",
			// Minutes.
			// --
			// NOTE: Minute mask are LOWER CASE so as not to conflict with months.
			"m",
			"mm",
			// Seconds.
			"s",
			"ss",
			// They can, of course, be used in combination.
			"yyyy-dd-MM",
			"E, MMM d",
			// You can ESCAPE parts of the mask by wrapping them in quotes.
			"MMM d 'somewhere around' H:mm aa"
		];
    
		for ( var mask of masks ) {
			this.examples.push({
				mask: mask,
				result: formatDate( this.now, mask, this.localID )
			});
		}

    this.dataSource.data = this.examples

	}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
