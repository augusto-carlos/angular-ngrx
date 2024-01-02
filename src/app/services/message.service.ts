import { Injectable } from '@angular/core';
import { Subject, Observable, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export interface MessageType {
  type: 'success' | 'warning' | 'info';
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private message$: Subject<MessageType | null> = new Subject<MessageType | null>();

  constructor() {}

  message(): Observable<MessageType | null> {
    return this.message$.asObservable();
  }

  showSuccessMessage(message: string) {
    this.showMessage({ type: 'info', message });
  }

  showWarningMessage(message: string) {
    this.showMessage({ type: 'warning', message });
  }

  private showMessage(value: MessageType): void {
    this.message$.next(value);

    // Automatically clear the message after 4 seconds
    timer(4000)
      .pipe(takeUntil(this.message$))
      .subscribe(() => {
        this.clearMessage();
      });
  }

  private clearMessage(): void {
    this.message$.next(null);
  }
}
