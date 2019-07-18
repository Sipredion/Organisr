import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '@organisr/data';

@NgModule({
  imports: [CommonModule],
  exports: [Todo, ]
})
export class DataModule {}
