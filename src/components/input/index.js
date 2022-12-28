import { styled } from "@mui/material";

const Ipt = styled(`input`)({
  width: "300px ",
  padding: "15px",
  border: "1.5px solid #d3d3d3",
  borderRadius: "5px",
});
const InputLabel = styled(`label`)({
  marginBottom: "10px",
  fontSize: "13px",
  display: "block",
  fontWeight: "550",
  fontFamily: `sans-serif`,
});

export function Input({ onChange, value, name, type, label, className }) {
  return (
    <div className={className}>
      <InputLabel>{label}</InputLabel>
      <Ipt value={value} onChange={onChange} name={name} type={type} />
    </div>
  );
}
