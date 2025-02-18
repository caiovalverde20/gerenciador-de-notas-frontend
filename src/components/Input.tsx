"use client";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <div className="flex flex-col">
      <label className="text-gray-700 text-sm mb-1">{label}</label>
      <input
        {...props}
        className="border border-gray-300 rounded-md p-2 w-full text-black focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
}