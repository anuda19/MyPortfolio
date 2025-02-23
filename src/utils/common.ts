const pathJoin = (...parts: string[]): string => {
  return parts.join("/").replace(/\/+/g, "/");
};
const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const common = {
  pathJoin: pathJoin,
  apiPath: (path: string = ""): string => {
    return `${process.env.NEXT_PUBLIC_API_URL}/${pathJoin("api", path)}`;
  },

  isValidEmail: (email: string): boolean => {
    return emailRegex.test(email.trim());
  },
};

export default common;
