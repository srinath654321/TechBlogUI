import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
    providedIn: 'root'
})
export class Util{

    constructor(public snackbar: MatSnackBar){}

    public openSnackbar(message: string){
        this.snackbar.open(message, "DISMISS",{
          horizontalPosition:'center',
          verticalPosition: 'bottom',
          duration: 10000,
          panelClass: ['blue-snackbar']
        })
      }
}