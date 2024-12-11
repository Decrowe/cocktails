import { UpperCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { filter } from 'rxjs';
import { Role, Roles } from '../../services/user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  imports: [
    UpperCasePipe,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  user = inject(UserService);
  roles = Roles;
  roleValues = Object.values(this.roles);

  loggingIn = this.user.loggingIn;

  usernameControl = new FormControl('');
  userChanges = toSignal(
    this.usernameControl.valueChanges.pipe(filter(Boolean)),
    {
      initialValue: '',
    }
  );

  secretControl = new FormControl('');
  secretChanges = toSignal(
    this.secretControl.valueChanges.pipe(filter(Boolean)),
    {
      initialValue: '',
    }
  );

  role = signal<Role>(Roles.guest);

  loginValid = computed(() => {
    const user = this.userChanges();
    const secret = this.secretChanges();
    const role = this.role();

    if (role === this.roles.guest) return !!user && !!role;
    else return !!user && !!role && !!secret;
  });

  login() {
    if (!this.loginValid()) return;
    const user = this.userChanges();
    const secret = this.secretChanges();
    const role = this.role();

    this.user.logIn(user, role, secret);
  }
}
