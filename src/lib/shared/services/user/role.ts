export const Roles = {
  barkeeper: 'Barkeeper',
  guest: 'Guest',
} as const;

export type Role = (typeof Roles)[keyof typeof Roles];
