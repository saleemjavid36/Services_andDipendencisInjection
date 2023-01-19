import { Injectable } from '@angular/core';
import { from } from 'rxjs';
// import (LoggingService) from '../logging.service'

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }
  logStatusChange(status:string){
    console.log('A server status changed, new status:' +  status);
  }
}
