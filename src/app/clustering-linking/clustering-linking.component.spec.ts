import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusteringLinkingComponent } from './clustering-linking.component';

describe('ClusteringLinkingComponent', () => {
  let component: ClusteringLinkingComponent;
  let fixture: ComponentFixture<ClusteringLinkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClusteringLinkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClusteringLinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
