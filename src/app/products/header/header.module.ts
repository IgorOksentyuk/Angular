import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  declarations: [HeaderComponent, TooltipComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
