"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Option } from "@/@types/dropdown";

interface DropdownProps {
  label: string;
  options: Option[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSelect: (val: any) => void;
  selectedValue?: Option;
  className?: string;
}
const DropdownWithLabel: React.FC<DropdownProps> = ({
  label,
  options,
  onSelect,
  selectedValue,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Option | undefined>(selectedValue);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: Option) => {
    setSelected(option);
    setIsOpen(false);
    onSelect(option);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Close dropdown if clicked outside
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={`${className} w-64 relative text-left`}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>

      <div
        className="h-[36px] border border-gray-300 rounded-md shadow-sm bg-white px-4 py-2 flex justify-between items-center cursor-pointer focus-within:ring-2 focus-within:ring-blue-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm text-gray-700">{selected?.label}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
        <ul className="text-sm absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto z-10 transition-all duration-300 ease-in-out">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownWithLabel;
