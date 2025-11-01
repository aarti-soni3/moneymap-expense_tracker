import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Box,
  MenuItem,
  Tabs,
  Tab,
  Typography,
} from "@mui/material";

import { NumericFormat } from "react-number-format";
import { CalendarMonth } from "@mui/icons-material";
import { useState } from "react";

function TransactionDialog({ open, handleOnCancel, handleOnSubmit }) {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTab = (e, tab) => {
    setCurrentTab(tab);
  };

  return (
    <>
      <Dialog open={open} onClose={handleOnCancel}>
        <DialogTitle> Add Transaction</DialogTitle>
        <DialogContent>
          <Tabs
            sx={{ marginTop: "10px" }}
            value={currentTab}
            onChange={handleTab}
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab value={0} label="Income"></Tab>
            <Tab value={1} label="Expense"></Tab>
          </Tabs>

          {/* <TabPanel index={0} value={0}>
        income tab
        </TabPanel> */}

          {/* <TabPanel index={1} value={0}>
        expense tab
        </TabPanel> */}

          <br />

          {/* <DialogContentText>hello this is content</DialogContentText> */}
          <form onSubmit={handleOnSubmit}>
            <NumericFormat
              label="Amount"
              prefix="$"
              decimalScale={2}
              customInput={TextField}
              thousandsGroupStyle="lakh"
              thousandSeparator
              fixedDecimalScale
              autoFocus
              required
            />
            <br />
            <br />

            <TextField
              type="select"
              label="Categories"
              sx={{ width: "13.8em" }}
              select
            >
              <MenuItem> food</MenuItem>
              <MenuItem> bills</MenuItem>
            </TextField>
            <br />
            <br />

            <TextField label="Description" required />
            <br />
            <br />

            <TextField
              type="date"
              sx={{ width: "13.8em" }}
              slots={{ openPickerIcon: CalendarMonth }}
            ></TextField>
            <br />
            <br />
          </form>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleOnCancel}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default TransactionDialog;
