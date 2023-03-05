export const isEmptyOrWhiteSpace = (
  str: string | undefined | null
): boolean => {
  if (typeof str === "undefined" || str === null || str.match(/^ *$/))
    return true;
  return false;
};

// export const formatDate = ()