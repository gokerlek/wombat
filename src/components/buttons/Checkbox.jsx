/**
 * Checkbox component
 *
 * @param {string} label - The text label for the checkbox.
 * @param {boolean} initialState - The initial state for the checkbox (either checked or unchecked).
 * @param {function} onChange - A callback function that is called when the checkbox state is changed.
 * @param {boolean} isChecked - A prop that can be used to set the checkbox state externally.
 * @param {boolean} table - A prop that specifies whether the checkbox is being used in a table.
 *
 * @returns {JSX} - Returns a JSX representation of a checkbox component.
 */

import { useState } from "react";
import { useTranslation } from "react-i18next";

const Checkbox = ({
  label,
  initialState,
  onChange,
  isChecked,
  table,
  custom_label,
}) => {
  const [checked, setChecked] = useState(initialState ?? false);
  const CustomLabel = custom_label ?? null;

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
    onChange(event.target.checked);
  };

  const { t } = useTranslation();

  return (
    <div className="flex items-start gap-2">
      <input
        type="checkbox"
        checked={table ? isChecked : checked}
        onChange={handleCheckboxChange}
        className="w-4 h-4  mt-1 border border-t500 rounded
        text-cyan-500
        cursor-pointer
        appearance-none
        checked:accent-cyan-500
        checked:bg-cyan-500
        bg-white
        focus:outline-none focus:ring-transparent checked:hover:bg-primary"
      />
      {label && (
        <label className="text-sm font-normal text-tGray-500">{t(label)}</label>
      )}

      {custom_label && <CustomLabel />}
    </div>
  );
};

export default Checkbox;
