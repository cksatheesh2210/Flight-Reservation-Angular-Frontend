import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  
  flightURL: string = "http://localhost:8080/flightservices/flights";
  reservationURL: string = "http://localhost:8080/flightservices/reservations";
  flightData:any;

  constructor(private _http:Http) { }

  public getFlights(from:string, to:string, departureDate:string):any{
    return this._http.get(this.flightURL+"?from="+from+"&to="+to+"&departureDate="+departureDate).
    pipe(
      map(res=>{
        this.flightData = res.json();
      },
      err=>{
        console.error(err);
      })
    )
  }

  public getFlight(id:number):any{
   return this._http.get(this.flightURL+"/"+id).
    pipe(
      map(res=>{
        return res.json();
      },
      err=>{
        console.error(err);
      })
    )
  }

  public saveReservation(reservation):any{
    return this._http.post(this.reservationURL,reservation).
    pipe(
      map(res=>{
        return res.json();
      },
      err=>{
        console.error(err);
      })
    )
  }
}
