import React from 'react';
import { DollarSign } from 'lucide-react';

interface PriceInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  unit: string;
}

const PriceInput = ({ label, value, onChange, unit }: PriceInputProps) => (
  <div className="flex items-center space-x-2">
    <label>{label} (per {unit}):</label>
    <div className="relative flex items-center">
      <DollarSign className="w-4 h-4 absolute left-2 text-gray-500" />
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        className="pl-8 pr-2 py-1 border rounded"
        placeholder={`Price per ${unit}`}
      />
    </div>
  </div>
);

export default PriceInput;