import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { styled } from "@mui/material";

const Title = styled(`div`)({
  borderBottom: "1px solid rgba(0,0,0,0.25)",
});

export function Popup({ title, children, openPopup, setOpenPopup }) {
  return (
    <Dialog open={openPopup}>
      <DialogTitle>
        <Title>{title}</Title>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
