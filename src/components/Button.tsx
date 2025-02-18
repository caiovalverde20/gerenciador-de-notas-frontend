"use client";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function Button({ text, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
    >
      {text}
    </button>
  );
}