import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactStore } from '../shared/contact-store';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  private readonly router = inject(Router);
  private readonly contactStore = inject(ContactStore);

  public form = new FormGroup({
    prenom: new FormControl('', { nonNullable: true, validators: Validators.required }),
    nom: new FormControl('', { nonNullable: true, validators: Validators.required }),
    age: new FormControl('', { nonNullable: true }),
    hideEmail: new FormControl(false, { nonNullable: true }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/.*@.*/)],
    }),
    commentaire: new FormControl('', { nonNullable: true, validators: Validators.required }),
  });

  constructor() {
    // La validité du champ Email dépend de la checkbox Hide : quand elle est
    // cochée, Email ne doit plus être requis et sa valeur doit être vidée
    // (comme demandé), au lieu de garder une valeur cachée obsolète.
    this.form.controls.hideEmail.valueChanges.subscribe((hidden) => {
      const email = this.form.controls.email;
      if (hidden) {
        email.reset('');
        email.clearValidators();
      } else {
        email.setValidators([Validators.required, Validators.pattern(/.*@.*/)]);
      }
      // Les modifications apportées aux validateurs ne prennent effet qu'une fois cette fonction appelée.
      email.updateValueAndValidity();
    });
  }

  public onSubmit(): void {
    // Garde-fou : le bouton est déjà [disabled] quand le formulaire est
    // invalide, donc ceci ne sert qu'à bloquer une validation via la touche Entrée.
    if (this.form.invalid) {
      return;
    }
    this.contactStore.save(this.form.getRawValue());
    alert('Le formulaire est valide');
    this.router.navigate(['/accueil']);
  }
}
