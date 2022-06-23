import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MorrisJsModule } from 'angular-morris-js';
import { DonationsComponent } from './donations.component';
import { DonationsRoutingModule } from './donations-routing.module';

@NgModule({
  declarations: [DonationsComponent],
  imports: [CommonModule, DonationsRoutingModule, MorrisJsModule],
})
export class DonationsModule {}
