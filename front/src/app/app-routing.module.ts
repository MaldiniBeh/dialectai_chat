import { AuthguardGuard } from './guard/authguard.guard';
import { AuthComponent } from './auth/auth.component';
import { ChatComponent } from './chat/chat.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: AuthComponent, pathMatch: 'full'
  },
  {
    path: 'chat', component: ChatComponent, canActivate: [AuthguardGuard]
  },
  { path: '**', redirectTo: 'chat' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
