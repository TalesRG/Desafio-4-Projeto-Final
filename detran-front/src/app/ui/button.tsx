const handleTitle = (title: string): string => {
  if (!title) {
    return 'No title';
  }
  return title;
};

type GenericButtonProps = {
  title?: string;
};

const Button = ({ title = '' }: GenericButtonProps) => {
  return (
    <button
      type="submit"
      className="w-full mt-6 bg-[var(--button-color)] text-white py-2 rounded hover:bg-[var(--button-color-hover)] transition-all"
    >
      {handleTitle(title)}
    </button>
  );
};

export default Button;