import { computed, Injectable, signal } from '@angular/core';
import { Permission, Permissions } from './permission';
import { Role } from './role';

@Injectable({ providedIn: 'root' })
export class UserService {
  private id = signal<string | undefined>(undefined);

  loggingIn = signal(false);

  loggedIn = computed(() => !!this.id());
  name = signal<string | undefined>(undefined);
  role = signal<Role | undefined>('Guest');

  hasPermission(permission: Permission): boolean {
    const role = this.role();
    if (!role) return false;

    const permissions = Permissions[role];
    return permissions.includes(permission as any);
  }

  logIn(username: string, role: Role, secret?: string) {
    this.loggingIn.set(true);
    this.id.set('test');
    this.name.set(username);
    this.role.set(role);
    this.loggingIn.set(false);
  }
  logOut() {
    this.id.set(undefined);
    this.name.set(undefined);
    this.role.set(undefined);
  }
}
