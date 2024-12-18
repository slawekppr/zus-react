
export const useForm = (fn: () => void) => {
  const onSubmt = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    fn();
  };
  return { onSubmit: onSubmt };
};
