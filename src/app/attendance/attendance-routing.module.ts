import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyComponent } from './daily/daily.component';
import { TopicscoveredComponent } from './topicscovered/topicscovered.component';


const routes: Routes = [
  {
    path:'daily',
  component:DailyComponent  },
  {
    path:'topiccov',
  component:TopicscoveredComponent  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
