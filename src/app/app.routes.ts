import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ClientComponent } from './client/client.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupComponent } from './signup/signup.component';
import { authGuard } from './auth.guard';
import { FormArrayComponent } from './form-array/form-array.component';
import { ParentComponent } from './parent/parent.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { WhopPayoutComponent } from './whop-payout/whop-payout.component';
import { PaypalComponent } from './paypal/paypal.component';
import { PopupComponent } from './popup/popup.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, },
  { path: 'client', component: ClientComponent },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'form-array', component: FormArrayComponent,},
  { path: 'directive', component: DirectiveComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'first', component: FirstComponent },
  { path: 'whop', component: WhopPayoutComponent },
  { path: 'paypal', component: PaypalComponent }

];

