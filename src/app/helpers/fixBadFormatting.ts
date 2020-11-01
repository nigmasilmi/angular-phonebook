
export const fixString = (wrongString: string): string => {
  return decodeURIComponent(escape(wrongString));
};
