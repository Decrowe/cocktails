export const CompleteOrderStates = {
  completed: 'Completed',
  rejected: 'Rejected',
} as const;

export type CompleteOrderState =
  (typeof CompleteOrderStates)[keyof typeof CompleteOrderStates];
