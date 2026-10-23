import { Service, signal } from '@angular/core';

export interface ContactSubmission {
  prenom: string;
  nom: string;
  age: string;
  hideEmail: boolean;
  email: string;
  commentaire: string;
}

@Service()
export class ContactStore {
  // Signal modifiable, gardé privé : seule this.save() a le droit de le changer.
  private readonly _lastSubmission = signal<ContactSubmission | null>(null);
  // Version lecture seule du même signal, exposée à tout composant qui
  // injecte ce service (ex: Gestion). Empêche de faire
  // `contactStore.lastSubmission.set(...)` depuis l'extérieur de cette classe.
  public readonly lastSubmission = this._lastSubmission.asReadonly();

  // Écrase ce qui était stocké avant — seule la dernière soumission est gardée.
  public save(submission: ContactSubmission): void {
    this._lastSubmission.set(submission);
  }
}
