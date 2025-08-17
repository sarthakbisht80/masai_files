import React, { useRef } from "react";

const FormattedInput = ({ initialValue = "", onChange }) => {
  const inputRef = useRef(null);
  const composingRef = useRef(false);

  // Format digits into groups of 4
  const formatValue = (value) =>
    value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim();

  const getRawValue = (formatted) => formatted.replace(/\s/g, "");

  const handleInput = () => {
    if (composingRef.current) return;

    const input = inputRef.current;
    const raw = getRawValue(input.value);

    const selectionStart = input.selectionStart;
    const selectionEnd = input.selectionEnd;

    // Count digits before caret
    let caretDigitIndex = 0;
    for (let i = 0, digits = 0; i < selectionStart; i++) {
      if (/\d/.test(input.value[i])) digits++;
      caretDigitIndex = digits;
    }

    const newFormatted = formatValue(raw);
    input.value = newFormatted;

    // Restore caret position
    let newCaret = 0;
    let digitsSeen = 0;
    while (digitsSeen < caretDigitIndex && newCaret < newFormatted.length) {
      if (/\d/.test(newFormatted[newCaret])) digitsSeen++;
      newCaret++;
    }
    input.setSelectionRange(newCaret, newCaret);

    if (onChange) onChange(getRawValue(newFormatted));
  };

  const handleCompositionStart = () => {
    composingRef.current = true;
  };

  const handleCompositionEnd = () => {
    composingRef.current = false;
    handleInput();
  };

  return (
    <input
      type="text"
      ref={inputRef}
      defaultValue={formatValue(initialValue)}
      onInput={handleInput}
      onCompositionStart={handleCompositionStart}
      onCompositionEnd={handleCompositionEnd}
      placeholder="1234 5678 9012 3456"
      style={{ fontSize: "16px", padding: "5px", width: "250px" }}
    />
  );
};

export default FormattedInput;
