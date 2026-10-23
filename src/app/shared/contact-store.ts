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
  private readonly _lastSubmission = signal<ContactSubmission | null>(null);
  public readonly lastSubmission = this._lastSubmission.asReadonly();

  public save(submission: ContactSubmission): void {
    this._lastSubmission.set(submission);
  }
}
