import { Component} from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';
// import { LoggingService } from '../logging.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService]
})
export class NewAccountComponent {
 // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService:LoggingService,
              private accountService:AccountsService){
                this.accountService.statusUpdated.subscribe(
                  (status:string) => alert('New Status: ' + status)
                )
              }


  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // }); no longer need as we are directly using it from service fiel
    
    // const service=new LoggingService;
    // service.logStatusChange(accountStatus)
    // console.log('A server status changed, new status: ' + accountStatus);
    this.accountService.addAccount(accountName,accountStatus)
    // 03 this.loggingService.logStatusChange(accountStatus)
  } 
}
