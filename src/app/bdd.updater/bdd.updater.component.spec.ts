import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bdd.UpdaterComponent } from './bdd.updater.component';

describe('Bdd.UpdaterComponent', () => {
  let component: Bdd.UpdaterComponent;
  let fixture: ComponentFixture<Bdd.UpdaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bdd.UpdaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bdd.UpdaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
