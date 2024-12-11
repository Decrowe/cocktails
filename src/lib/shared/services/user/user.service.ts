import { Injectable, signal } from '@angular/core';
import { Permission, Permissions, Role } from './permissions';

@Injectable({ providedIn: 'root' })
export class UserService {
  private id = signal<string | undefined>(undefined);

  name = signal<string | undefined>(undefined);
  role = signal<Role | undefined>('Guest');

  hasPermission(permission: Permission): boolean {
    const role = this.role();
    if (!role) return false;

    const permissions = Permissions[role];
    return permissions.includes(permission as any);
  }
}
