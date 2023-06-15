import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidatorService implements AsyncValidator {
  //opcion 2
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;



    const httpCallObservable =new Observable<ValidationErrors| null>((subscriber)=>{

      console.log({email});

      if(email=== 'dannyudan@outlook.com'){
        subscriber.next({emailTaken:true});
        subscriber.complete(); //importante para terminar el observable
        return;
      }

      subscriber.next(null);
      subscriber.complete();
    }).pipe(
      delay(3000)
    );

    return httpCallObservable;
  }
  //opcion 1
  // validate(control: AbstractControl):  Observable<ValidationErrors | null> {

  //   const email = control.value;
  //   console.log({email});

  //   return of({
  //     emailTaken:true
  //   }).pipe(
  //     delay(2000)
  //   )

  // }
  //Determinar cuando el validator cambia
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }
}
// Peticion que nos de la info si existe o no ,Ejemploe
    // return this.http.get<any[]>(`https://miservicio.com/users?q=${email}`).pipe(
    //   map((resp) => {
    //     return resp.length === 0 ? null : { emailTaken: true };
    //   })
    // );
