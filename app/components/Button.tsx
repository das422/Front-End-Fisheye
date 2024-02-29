type ButtonProps = {
  text: string;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string; // New prop for custom styling
};

export default function Button({ text, onClick, className }: ButtonProps) {
  return (
    <button
      className={`text-gray-600 font-semibold text-xl border-gray-300 border-2 rounded-2xl bg-green-100 m-2 px-2 py-2 max-h-[150px] hover:bg-tgreen transition duration-300 ease-in-out ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
