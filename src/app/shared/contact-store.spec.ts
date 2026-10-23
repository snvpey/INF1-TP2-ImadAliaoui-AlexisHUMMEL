import { TestBed } from '@angular/core/testing';
import { ContactStore } from './contact-store';

describe('ContactStore', () => {
  let service: ContactStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
