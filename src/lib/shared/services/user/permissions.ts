const PermissionsNavigate = {
  card: 'NavigateCard',
  cocktails: 'NavigateCocktails',
  cart: 'NavigateCart',
  queue: 'NavigateQueue',
} as const;

type PermissionNavigate =
  (typeof PermissionsNavigate)[keyof typeof PermissionsNavigate];

const PermissionsCocktails = {
  addCocktail: 'AddCocktail',
} as const;

type PermissionCocktails =
  (typeof PermissionsCocktails)[keyof typeof PermissionsCocktails];

const PermissionsQueue = {
  rejectOrder: 'RejectOrder',
  completeOrder: 'CompleteOrder',
} as const;

type PermissionQueue = (typeof PermissionsQueue)[keyof typeof PermissionsQueue];

export type Permission =
  | PermissionNavigate
  | PermissionCocktails
  | PermissionQueue;

export const Permissions = {
  Barkeeper: [
    PermissionsNavigate.card,
    PermissionsNavigate.cart,
    PermissionsNavigate.queue,
    PermissionsQueue.rejectOrder,
    PermissionsQueue.completeOrder,
  ],
  Guest: [
    PermissionsNavigate.cocktails,
    PermissionsNavigate.cart,
    PermissionsNavigate.queue,
    PermissionsCocktails.addCocktail,
  ],
} as const;

export type Role = keyof typeof Permissions;
