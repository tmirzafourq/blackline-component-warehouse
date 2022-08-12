import { NgModule } from '@angular/core';
import { BlacklineLibraryComponent } from './blackline-library.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [BlacklineLibraryComponent, ButtonComponent],
  imports: [],
  exports: [BlacklineLibraryComponent, ButtonComponent],
})
export class BlacklineLibraryModule {}
