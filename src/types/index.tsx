export type UserData = {
  email: string;
  password: string;
};

export type Errors = {
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export type ValidationResult = {
  progress: number;
  errors: Errors;
};
