import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// import { CalendarComponent } from './pages/calendar/calendar.component';
// import { RegisterComponent } from './pages/register/register.component';
import { VotersComponent } from './pages/voters/voters.component';
// import { LoginComponent } from './pages/login/login.component';
import { DonorNotesComponent } from './components/donor-notes/donor-notes.component';
import { DonorEditComponent } from './components/donor-edit/donor-edit.component';
import { HeaderComponent } from './layout/header/header.component';
import { DonorsComponent } from './pages/donors/donors.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DonorDetailComponent } from './pages/donor-detail/donor-detail.component';
import { DonorProfileComponent } from './components/donor-profile/donor-profile.component';
import { SearchComponent } from './pages/search/search.component';
import { DonorDonationsComponent } from './components/donor-donations/donor-donations.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    DonorsComponent,
    VotersComponent,
    // CalendarComponent,
    // LoginComponent,
    DonorDetailComponent,
    // RegisterComponent,
    DonorProfileComponent,
    DonorNotesComponent,
    DonorEditComponent,
    SearchComponent,
    DonorDonationsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    CardModule,
    TableModule,
    HttpClientModule,

    BrowserAnimationsModule,
    NgbModule,
    ToolbarModule,
    ButtonModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    InputTextModule,
    DropdownModule,
    DialogModule,
    FileUploadModule,
    ProgressBarModule,
    RatingModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    ToolbarModule,
    InputTextareaModule,
    SliderModule,

    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
