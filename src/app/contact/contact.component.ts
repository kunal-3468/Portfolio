import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor( private snackbar: MatSnackBar,
               private httpsrs: HttpService ) { }

  ngOnInit(): void {
  }

   openSnackBar(message, action){
      this.snackbar.open(message, action,{duration: 3000});
   }

    email = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);

    name = new FormControl('', [
      Validators.required,
    ]);

    contactform = new FormGroup({
      name: new FormControl('',Validators.required),
      message: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required, Validators.email]),
      subject: new FormControl('',Validators.required)
    })
    
    onsubmit(){
       this.httpsrs.post(this.contactform.value).subscribe(data => {
         console.log(data);
       });
       this.contactform.reset();
    }
}
