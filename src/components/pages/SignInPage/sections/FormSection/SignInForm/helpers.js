const fields = [
  {
    id: "sign_in_email",
    type: "string",
    required: true,
    name: "email",
    label: "Email",
    icon: "email",
    key: "sign_in_email"
  },
  {
    id: "sign_in_password",
    type: "password",
    required: true,
    name: "password",
    label: "Password",
    icon: "lock",
    key: "sign_in_Password"
  }
];

function validate(values) {
  const errors = {};
  const requiredFields = ["email", "password"];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }
  return errors;
}

export { fields, validate };
