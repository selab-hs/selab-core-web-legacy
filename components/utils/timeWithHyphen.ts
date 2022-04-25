export const timeWithHyphen = (value: string) => {
  const timeValue = new Date(value);

  const str =
    timeValue.getFullYear() + '-' + (timeValue.getMonth() + 1) + '-' + timeValue.getDate();

  return str;
};
