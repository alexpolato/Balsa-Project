import { Dialog, DialogContent, DialogTitle } from "@mui/material";

export function CarCheck({ title, children, openPopup, setOpenPopup }) {
  return (
    <Dialog open={openPopup}>
      <DialogTitle>
        <div>title goes here</div>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
