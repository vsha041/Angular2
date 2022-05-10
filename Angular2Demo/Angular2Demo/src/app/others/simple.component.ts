﻿import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'simple',
    template: `You entered: {{simpleInput}}`
})
export class SimpleComponent implements OnChanges {
    ngOnChanges(changes: SimpleChanges): void {
         for (let propertyName in changes) {
             let change = changes[propertyName];
             let current = JSON.stringify(change.currentValue);
             let previous = JSON.stringify(change.previousValue);
             console.log(propertyName + ': currentValue = ' + current + ', previous value = ' + previous);
         }
    }

    @Input() simpleInput: string;
}