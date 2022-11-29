export const alertMessage = (value: string) => {
  if (!value.trim()) return;

  alert(value);
};

export const alertNumber = (value: string) => {
  if (!value.trim() || isNaN(+value)) return;

  alert(value);
};
