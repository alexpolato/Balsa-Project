import { styled, TextField, MenuItem } from "@mui/material";

const Slct = styled(`select`)({
  padding: "15px",
  border: "1.5px solid #d3d3d3",
  borderRadius: "5px",
});
// const SelectLabel = styled(`label`)({
//   fontSize: "13px",
//   display: "block",
//   fontWeight: "medium",
//   fontFamily: `sans-serif`,
// });

export function Select({ onChange, value, label, chieldren }) {
  return (
    <Slct width="250px">
      <TextField label={label} select value={value} onChange={onChange}>
        <MenuItem valueMenu={valueMenu}>{labelMenu}</MenuItem>
        <MenuItem valueMenu={valueMenu}>{labelMenu}</MenuItem>
        <MenuItem valueMenu={valueMenu}>{labelMenu}</MenuItem>
        <MenuItem valueMenu={valueMenu}>{labelMenu}</MenuItem>
        <MenuItem valueMenu={valueMenu}>{labelMenu}</MenuItem>
      </TextField>
    </Slct>
  );
}
