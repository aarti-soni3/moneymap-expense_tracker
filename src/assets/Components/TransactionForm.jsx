import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  MenuItem,
} from "@mui/material";

import { NumericFormat } from "react-number-format";
import { CalendarMonth } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../Utils/date";
import { addTransaction } from "../Store/TransactionSlice";

function TransactionForm({
  dialogTitle,
  categories,
  transactionTab,
  handleOnSave,
  handleOnClose,
}) {
  const categoriesData = useSelector((state) => state.category.items);

  const initialData = {
    type:transactionTab,
    amount: NaN,
    categoryId: categories[0],
    description: "",
    date: formatDate(new Date()),
  };

  const [formData, setFormData] = useState(initialData);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const GetIdFromCategory = (category) => {
    return categoriesData.find((c) => c.name === category).id;
  };

  const handleOnSubmit = (event) => {
    formData.categoryId = GetIdFromCategory(formData.categoryId);
    // setFormData((prevData)=>({...prevData,[category]: }))

    event.preventDefault();
    dispatch(addTransaction(formData));
    setFormData(initialData)
    handleOnSave();
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <DialogContent>
          <DialogTitle sx={{ padding: 0 }}> {dialogTitle} </DialogTitle>

          <NumericFormat
            prefix="&#8377;"
            name="amount"
            label="Amount"
            decimalScale={2}
            customInput={TextField}
            thousandsGroupStyle="lakh"
            sx={{ marginTop: "10px" }}
            value={formData.amount}
            onChange={handleOnChange}
            thousandSeparator
            fixedDecimalScale
            autoFocus
            required
          />
          <br />
          <br />

          <TextField
            type="select"
            name="categoryId"
            label="Categories"
            sx={{ width: "13.8em" }}
            value={formData.categoryId}
            onChange={handleOnChange}
            select
          >
            {categories.map((category) => {
              return <MenuItem value={category}> {category}</MenuItem>;
            })}
          </TextField>
          <br />
          <br />

          <TextField
            name="description"
            label="Description"
            value={formData.description}
            onChange={handleOnChange}
            required
          />
          <br />
          <br />

          <TextField
            name="date"
            type="date"
            sx={{ width: "13.8em" }}
            // slots={{ openPickerIcon: CalendarMonth }}
            value={formData.date}
            onChange={handleOnChange}
          ></TextField>
          {console.log(formData.date)}
          <br />
          <br />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleOnClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </form>
    </>
  );
}

export default TransactionForm;
