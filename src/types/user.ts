export const GENDER = {
  male: "male",
  female: "female",
  unspecified: "unspecified",
} as const;

export type Gender = (typeof GENDER)[keyof typeof GENDER];

export const USER_ROLE = {
  admin: "admin",
  user: "user",
} as const;

export type UserRole = (typeof USER_ROLE)[keyof typeof USER_ROLE];

export type UserProfile = {
  id: number;
  name: string;
  surname: string;
  phone: string | null;
  gender: Gender;
  dateOfBirth?: string | null;
  height: number | null;
  weight: number | null;
  avatarLink: string | null;
  userId: number;
};

export type User = {
  id: number;
  email: string;
  role: UserRole;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
  profile?: UserProfile;
};


export type AuthUser = Pick<User, "id" | "email" | "role">;

export type UpdateUserProfileRequest = Partial<UserProfile>;

export type UserProfileState = {
  user: UserProfile | null;
  setUser: (user: UserProfile | null) => void;
};
