export const SIGN_UP_VALIDATION_FIELDS = {
  email: "email",
  password: "password",
  confirmPassword: "confirmPassword",
} as const;

export const LOGIN_FIELS_VALIDATION = {
  email: "email",
  password: "password",
} as const;

export const PASSWORD_REGEX = {
  lower: /[a-z]+/,
  upper: /[A-Z]+/,
  digit: /\d+/,
};

export const MIN_PASSWORD_LENGTH = 8;
export const MAX_EMAIL_LENGTH = 70;

export const EMAIL_RULES = {
  required: "Email is required",
  incorrect: "Invalid email",
  max: `Email must be less than ${MAX_EMAIL_LENGTH} characters`,
};

export const PASSWORD_RULES = {
  required: "Password is required",
  min: `Password must be at least ${MIN_PASSWORD_LENGTH} characters`,
  lower: "Must contain at least one lowercase character",
  upper: "Must contain at least one uppercase character",
  digit: "Must contain at least one number",
};

export const CONFIRM_PASSWORD = {
  matchingWithField: "password",
  matching: "Passwords must match",
};
