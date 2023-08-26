import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent {
    @Input() placeholder: string = "";
    @Output() onTextChange = new EventEmitter<string>();
    public searchValue: string = "";
    public searchValueUpdate = new Subject<string>();
  
    constructor(){
      this.searchValueUpdate.pipe(
        debounceTime(400),
        distinctUntilChanged())
        .subscribe(value => {
          
        });
    }
}
