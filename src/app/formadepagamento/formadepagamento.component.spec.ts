import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormadepagamentoComponent } from './formadepagamento.component';

describe('FormadepagamentoComponent', () => {
  let component: FormadepagamentoComponent;
  let fixture: ComponentFixture<FormadepagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormadepagamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormadepagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
