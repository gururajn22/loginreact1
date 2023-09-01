export const valid = (email, password, fullName) => {
  // const isFullName=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(fullName);
  const isEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );
  // if(!isFullName) return "Name is not valid"
  if (!isEmail) return "Email id is not valid";
  if (!isPassword) return "Password is not valid";
  return null;
};
