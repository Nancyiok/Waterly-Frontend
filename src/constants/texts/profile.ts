export const PROFILE_TEXTS = {
  toasts: {
    saved: "Your profile is updated",
  },
  header: {
    title: "Profile Settings",
    description:
      "Update your personal details and parameters for an accurate daily water intake calculation.",
    saveButton: "Save Changes",
  },
  personalDetails: {
    title: "Personal Details",
    description: "This information is only used in your profile.",
    firstNameLabel: "First Name",
    firstNamePlaceholder: "John",
    lastNameLabel: "Last Name",
    lastNamePlaceholder: "Smith",
    emailLabel: "Email",
    phoneLabel: "Phone",
    dateOfBirthLabel: "Date of Birth",
  },
  gender: {
    label: "Gender",
    placeholder: "Select gender",
    options: {
      male: "Male",
      female: "Female",
      other: "Other",
    },
  },
  changePassword: {
    title: "Change Password",
    description:
      "Leave the fields blank if you don't want to change your password.",
    currentPasswordLabel: "Current Password",
    currentPasswordPlaceholder: "Enter current password",
    newPasswordLabel: "New Password",
    newPasswordPlaceholder: "At least 8 characters",
    repeatPasswordLabel: "Repeat Password",
    repeatPasswordPlaceholder: "Repeat new password",
  },
  bodyParameters: {
    title: "Body Parameters",
    description:
      "Helps calculate your personal daily intake more accurately.",
    heightLabel: "Height, cm",
    weightLabel: "Weight, kg",
  },
} as const;
