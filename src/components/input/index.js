import { styled } from "@mui/material";

const Ipt = styled(`input`)({
  padding: "15px",
  border: "1px solid rgba(0, 0, 0, 0.25)",
  borderRadius: "5px",
});
const InputLabel = styled(`label`)({
  fontSize: "13px",
  display: "block",
  fontWeight: "medium",
  fontFamily: `sans-serif`,
  color: "rgba(0, 0, 0, 0.6)",
});

export function Input({
  onChange,
  value,
  name,
  type,
  label,
  className,
  maxLength,
  checked,
  placeholder,
  fullWidth,
}) {
  return (
    <div className={className}>
      <InputLabel>{label}</InputLabel>
      <Ipt
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        type={type}
        maxLength={maxLength}
        checked={checked}
        fullWidth={fullWidth}
      />
    </div>
  );
}
