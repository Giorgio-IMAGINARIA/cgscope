// ANGULAR COMPONENTS
import { Component } from '@angular/core';

@Component({
    selector: 'mousePanel',
    templateUrl: '../templates/mousePanel.component.html',
    styleUrls: ['../styles/mousePanel.component.css']
})

export class MousePanelComponent {
    private counter: number = 0;

    private nrOfElements: number;
    private disableInputNrElements: boolean = false;
    private disableConfirmNrElementsButton: boolean = true;

    private elementToAdd: number;
    private disableInputElementToAdd: boolean = true;
    private disableConfirmElementToAddButton: boolean = true;

    private arrayElements: Array<number> = [];

    private result: string;

    private firstResult: string='placeholder 1';
    private secondResult: string= 'placeholder 2';

    constructor() { }

    private confirmNrElements(): void {
        this.disableInputNrElements = true;
        this.disableConfirmNrElementsButton = true;
        this.disableInputElementToAdd = false;

    }

    private isEven(n: number): boolean {
        return n % 2 == 0;
    }

    private formatResult(n: number): string {
        return n.toFixed(1);
    }

    private toFixed(num: number, fixed: number): string {
        let re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
        return num.toString().match(re)[0];
    }

    private confirmElementToAdd(): void {
        this.arrayElements.push(this.elementToAdd);
        this.elementToAdd = null;
        this.disableConfirmElementToAddButton = true;
        this.counter++;
        if (this.counter === this.nrOfElements) {
            this.disableConfirmElementToAddButton = true;
            this.disableInputElementToAdd = true;
        }
        if (this.isEven(this.arrayElements.length)) {
            this.result = this.toFixed((this.arrayElements[(this.arrayElements.length / 2) - 1] + this.arrayElements[(this.arrayElements.length / 2)]) / 2, 1);
        } else {
            this.result = this.toFixed(this.arrayElements[Math.round(this.arrayElements.length / 2) - 1], 1);
        };

    }

    private checkNrElementsInput(): void {
        this.disableConfirmNrElementsButton = this.nrOfElements && Number.isInteger(this.nrOfElements) ? false : true;
    }

    private checkElementToAddInput(): void {
        this.disableConfirmElementToAddButton = Number.isInteger(this.elementToAdd) ? false : true;
    }
}