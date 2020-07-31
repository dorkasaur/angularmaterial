import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ContactmanagerAppComponent} from './contactmanager-app.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {MainContentComponent} from './components/main-content/main-content.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';

import {MaterialModule} from '../shared/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {NotesComponent} from './components/notes/notes.component';
import {NewContactDialogComponent} from './components/new-contact-dialog/new-contact-dialog.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';


const routes: Routes = [
  {
    path: '', component: ContactmanagerAppComponent,
    children: [
      {path: '', pathMatch: 'full', component: MainContentComponent},
      {path: ':id', component: MainContentComponent}
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [ContactmanagerAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent, NotesComponent,
    NewContactDialogComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    UserService,
    MatDatepickerModule
  ]
})
export class ContactmanagerModule {
}
