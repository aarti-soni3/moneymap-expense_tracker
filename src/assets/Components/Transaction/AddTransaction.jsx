// #region Imports
import {
  Dialog,
  MenuItem,
  TextField,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { GetIdFromTransationType } from "../../Utils/transactionHelpers";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../../Utils/date";
import { NumericFormat } from "react-number-format";
import { addTransaction } from "../../Store/TransactionSlice";
import { cleanAmount } from "../../Utils/math";
import {
  GetCategoryNameListByType,
  GetIdFromCategory,
} from "../../Utils/categoryHelper";
// #endregion

// #region Component
function AddTransaction({ open, handleOnCloseDialog }) {
  // #region Hooks
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.items);
  const transactionTypes = useSelector(
    (state) => state.setting.transactionType
  );

  //#endregion

  // #region Derived Data
  const categoryNameList = GetCategoryNameListByType(
    categories,
    GetIdFromTransationType(transactionTypes, "Income")
  );
  const initialData = {
    typeId: transactionTypes?.[0]?.name || "", //TODO: used [always check for null or undefined]
    amount: NaN,
    categoryId: categoryNameList[0] || "",
    title: "",
    description: "",
    date: formatDate(new Date()),
  };
  // #endregion

  // #region State
  const [formData, setFormData] = useState(initialData);
  // #endregion

  // #region Event Handlers
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    //TODO: used [right way for updating state]
    const payload = {
      ...formData,
      amount: cleanAmount(formData.amount),
      categoryId: GetIdFromCategory(categories, formData.categoryId),
      typeId: GetIdFromTransationType(transactionTypes, formData.typeId),
    };
    dispatch(addTransaction(payload));
    setFormData(initialData);
    handleOnCloseDialog();
  };

  const handleOnClose = () => {
    setFormData(initialData);
    handleOnCloseDialog();
  };

  const handleOnTransactionTypeChange = (event) => {
    const { name, value } = event.target;
    const selectedTypeId = GetIdFromTransationType(transactionTypes, value);
    const categoryList = GetCategoryNameListByType(categories, selectedTypeId);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      categoryId: categoryList[0] || "",
    }));
  };
  // #endregion

  // #region Render
  return (
    <>
      <Dialog open={open} maxWidth="xs" fullWidth={true}>
        <form onSubmit={handleOnSubmit}>
          <DialogContent>
            <DialogTitle sx={{ padding: 0 }}> Add Transaction </DialogTitle>

            <TextField
              type="select"
              name="typeId"
              label="Type"
              sx={{ width: { xs: "16.5em", md: "25em" }, mt: 3 }}
              value={formData.typeId}
              onChange={handleOnTransactionTypeChange}
              select
            >
              {transactionTypes.map((transactionType) => {
                return (
                  <MenuItem
                    key={transactionType.id}
                    value={transactionType.name}
                  >
                    {transactionType.name}
                  </MenuItem>
                );
              })}
            </TextField>
            <br />
            <br />

            <TextField
              type="select"
              name="categoryId"
              label="Categories"
              sx={{ width: { xs: "16.5em", md: "25em" } }}
              value={formData.categoryId}
              onChange={handleOnChange}
              select
            >
              {GetCategoryNameListByType(
                categories,
                GetIdFromTransationType(transactionTypes, formData.typeId)
              ).map((category) => {
                return <MenuItem value={category}> {category}</MenuItem>;
              })}
            </TextField>
            <br />
            <br />

            <NumericFormat
              prefix="&#8377;"
              name="amount"
              label="Amount"
              decimalScale={2}
              customInput={TextField}
              thousandsGroupStyle="lakh"
              sx={{ marginTop: "10px", width: { xs: "16.5em", md: "25em" } }}
              value={formData.amount}
              onChange={handleOnChange}
              thousandSeparator
              fixedDecimalScale
              // autoFocus
              required
            />
            <br />
            <br />

            <TextField
              name="title"
              label="Title"
              value={formData.title}
              onChange={handleOnChange}
              sx={{ width: { xs: "16.5em", md: "25em" } }}
              required
            />
            <br />
            <br />

            <TextField
              name="description"
              label="Description (Optional)"
              value={formData.description}
              sx={{ width: { xs: "16.5em", md: "25em" } }}
              onChange={handleOnChange}
            />
            <br />
            <br />

            <TextField
              name="date"
              type="date"
              sx={{ width: { xs: "16.5em", md: "25em" } }}
              // slots={{ openPickerIcon: CalendarMonth }}
              value={formData.date}
              onChange={handleOnChange}
            ></TextField>
            <br />
          </DialogContent>

          <DialogActions>
            <Button variant="outlined" onClick={handleOnClose}>
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
  // #endregion
}
// #endregion

export default AddTransaction;
