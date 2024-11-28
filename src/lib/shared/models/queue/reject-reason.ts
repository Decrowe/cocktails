export const RejectReasons = {
  missingIngredients: 'Some Ingredients are missing.',
} as const;

export type RejectReason = (typeof RejectReasons)[keyof typeof RejectReasons];
