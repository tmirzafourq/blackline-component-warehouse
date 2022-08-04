import { NgModule } from '@angular/core';
import { BlacklineLibraryComponent } from './blackline-library.component';
import { ButtonComponent } from './button/button.component';
import { LineComponent } from './line/line.component';



@NgModule({
  declarations: [BlacklineLibraryComponent, ButtonComponent, LineComponent],
  imports: [
  ],
  exports: [BlacklineLibraryComponent]
})
export class BlacklineLibraryModule { }
