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
  // Signal venant du service partagé : null si Contact n'a jamais été soumis,
  // ce que le template utilise pour choisir entre la carte résumé et le 404.
  public readonly lastSubmission = this.contactStore.lastSubmission;
}
