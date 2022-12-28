import { styled } from "@mui/material";

const Btn = styled(`button`)({
  padding: "15px",
  border: "1px solid #077187",
  borderRadius: "5px",
  background: "#3142D8",
  color: "white",
  "&:hover": {
    background: "#192596",
    cursor: "pointer",
    transition: "300ms",
  },
});

export function Button({ children, onClick, className }) {
  return (
    <div className={className}>
      <Btn onClick={onClick} variant="contained">
        {children}
      </Btn>
    </div>
  );
}
