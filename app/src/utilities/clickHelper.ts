export const copyInputValue = async (
  event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement, MouseEvent>
) => {
  await navigator.clipboard.writeText(event.currentTarget.value);
};
