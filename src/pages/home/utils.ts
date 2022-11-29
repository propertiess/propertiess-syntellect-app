export const alertMessage = (value: string) => {
  if (!value.trim()) return;

  alert(value);
};

export const alertNumber = (value: string) => {
  if (!value.trim() || isNaN(+value)) return;

  alert(value);
};

export const onTime = async <T, V>(
  condition: T,
  callback: (val: V) => void,
  value: V,
  delay: number
) => {
  const timer: NodeJS.Timeout = await new Promise(resolve => {
    const id = setTimeout(() => {
      condition && callback(value);
      resolve(id);
    }, delay);
  });

  clearTimeout(timer);
};
