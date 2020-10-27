import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBoxRoutingModule } from './search-box-routing.module';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  declarations: [SearchBoxComponent],
  imports: [CommonModule, SearchBoxRoutingModule],
})
export class SearchBoxModule {}
