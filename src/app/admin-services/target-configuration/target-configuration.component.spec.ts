import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetConfigurationComponent } from './target-configuration.component';

describe('TargetConfigurationComponent', () => {
  let component: TargetConfigurationComponent;
  let fixture: ComponentFixture<TargetConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
