import {Injectable} from '@angular/core';

@Injectable()
export class CounterService {
  private activeToInactive = 0;
  private inactiveToActive = 0;

  constructor() { }

  logInactiveToActive() {
    ++this.inactiveToActive;
    console.log('Inactive to active:' + this.inactiveToActive);
  }

  logActiveToInactive() {
    ++this.activeToInactive;
    console.log('Active to inactive:' + this.activeToInactive);
  }
}
