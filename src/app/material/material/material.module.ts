import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const materialComponent=[
    MatButtonModule,
    MatSlideToggleModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    MatInputModule,
    MatSnackBarModule
];

@NgModule({
  imports: [materialComponent],
  exports:[materialComponent]
})
export class MaterialModule { }
