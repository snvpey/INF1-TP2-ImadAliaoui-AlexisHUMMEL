import { Component, inject } from '@angular/core';
import { ContactStore } from '../shared/contact-store';

@Component({
  imports: [],
  selector: 'app-gestion',
  styleUrl: './gestion.scss',
  templateUrl: './gestion.html',
})
export class Gestion {
  private readonly contactStore = inject(ContactStore);
  public readonly lastSubmission = this.contactStore.lastSubmission;
}
