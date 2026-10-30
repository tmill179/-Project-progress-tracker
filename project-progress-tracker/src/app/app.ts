import { Component } from '@angular/core';
import { MilestoneApi } from './milestone-api/milestone-api';
@Component({selector:'app-root',standalone:true,imports:[MilestoneApi],template:`<main><header><p class=eyebrow>PROJECT PROGRESS TRACKER</p><h1>Project milestones</h1><p>View milestones and submit an update.</p></header><app-milestone-api /></main>`})
export class App {}
