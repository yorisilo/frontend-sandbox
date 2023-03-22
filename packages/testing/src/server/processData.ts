const truncate = (item: string): string => {
  return item.substring(0, 10);
};

const reverse = (item: string): string => {
  return item.split("").reverse().join("");
};

const toUpperCase = (item: string): string => {
  return item.toUpperCase();
};

export const processData = (data: string[]): string[] => {
  const result: string[] = [];
  data.forEach((item) => {
    if (item.length > 10) {
      result.push(truncate(item));
    } else if (item.length % 2 === 0) {
      result.push(reverse(item));
    } else {
      result.push(toUpperCase(item));
    }
  });
  return result;
};

// For testing purposes only
export { truncate, reverse, toUpperCase };
