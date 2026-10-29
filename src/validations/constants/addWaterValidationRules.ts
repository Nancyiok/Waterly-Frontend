export const ADD_WATER_LIMITS = {
  amountMin: 100,
  amountMax: 5000,
} as const;

export const ADD_WATER_VALIDATION_MESSAGES = {
  amount: {
    required: "Enter amount",
    int: "Amount must be a whole number",
    min: `Minimum is ${ADD_WATER_LIMITS.amountMin} ml`,
    max: `Maximum is ${ADD_WATER_LIMITS.amountMax} ml`,
  },
} as const;
