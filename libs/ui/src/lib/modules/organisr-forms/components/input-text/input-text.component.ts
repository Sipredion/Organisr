import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'organisr-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent extends FormControl implements OnInit {

  modelValue: string;

  @Input() type: 'input' | 'textarea' = 'input';
  @Input() appearance: 'outline' | 'fill' | 'standard' | 'legacy' = 'legacy';
  @Input() label: string;
  @Input()
  get model(): string {
    return this.modelValue;
  };

  set model(value: string) {
    this.modelValue = value;
    this.modelChange.emit(this.modelValue)
  }

  @Output() modelChange = new EventEmitter<string>();

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
