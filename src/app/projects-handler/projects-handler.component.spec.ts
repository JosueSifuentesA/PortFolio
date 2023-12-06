import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsHandlerComponent } from './projects-handler.component';

describe('ProjectsHandlerComponent', () => {
  let component: ProjectsHandlerComponent;
  let fixture: ComponentFixture<ProjectsHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsHandlerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectsHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
