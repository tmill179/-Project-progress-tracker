import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Observable, catchError, of } from 'rxjs';
import { MilestoneService, Milestone } from '../milestone';
@Component({selector:'app-milestone-api',standalone:true,
 imports:[CommonModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatButtonModule],
 templateUrl:'./milestone-api.html'})
export class MilestoneApi implements OnInit {
  milestones$!: Observable<Milestone[]>;
  message = signal('');
  loadError = signal('');
  submitting = signal(false);
  milestoneForm = new FormGroup({
    name: new FormControl('', {nonNullable:true, validators:[Validators.required, Validators.pattern(/\S/)]}),
    status: new FormControl('Not Started', {nonNullable:true, validators:[Validators.required]})
  });
  constructor(private milestoneService: MilestoneService) {}
  ngOnInit(): void { this.loadMilestones(); }
  loadMilestones(): void {
    this.loadError.set('');
    this.milestones$ = this.milestoneService.getMilestones().pipe(catchError(() => {
      this.loadError.set('Unable to load milestones. Check that the Express server is running.');
      return of([]);
    }));
  }
  onSubmit(): void {
    if(this.milestoneForm.invalid || this.submitting()) { this.milestoneForm.markAllAsTouched(); return; }
    this.submitting.set(true); this.message.set('');
    const {name, status} = this.milestoneForm.getRawValue();
    this.milestoneService.addMilestone(name.trim(), status).subscribe({
      next: response => { this.message.set(response.message); this.submitting.set(false); },
      error: () => { this.message.set('Unable to submit milestone. Check the Express server and try again.'); this.submitting.set(false); }
    });
  }
}
