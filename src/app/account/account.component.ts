import { Component, Input } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers:[LoggingService]
})
export class AccountComponent {
  @Input() account: { name: string; status: string; } | any;
  @Input() id: number | any;
 // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService:LoggingService
              ,private accountService:AccountsService){}

  onSetTo(status: string) {
    // 02 this.statusChanged.emit({id: this.id, newStatus: status});
    // console.log('A server status changed, new status: ' + status);
    this.accountService.updateStatus(this.id,status)
    //03 this.loggingService.logStatusChange(status);

    this.accountService.statusUpdated.emit(status)
  }
}
  