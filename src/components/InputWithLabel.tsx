"use client";
import React, { useState } from "react";

interface InputWithLabelProps {
  label: string;
  placeholder?: string;
  type?: string;
  onChange: (val: string) => void;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  label,
  placeholder = "",
  type = "text",
  onChange,
}) => {
  const [value, setValue] = useState("");

  return (
    <div className="w-64 relative text-left">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={placeholder}
        className="h-[36px] border border-gray-300 rounded-md shadow-sm bg-white px-4 py-2 w-full text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
      />
    </div>
  );
};

export default InputWithLabel;
