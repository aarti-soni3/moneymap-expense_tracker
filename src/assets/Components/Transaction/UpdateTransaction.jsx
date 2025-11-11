// #region Imports
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTransaction } from "../../Store/TransactionSlice";
import { NumericFormat } from "react-number-format";
import { cleanAmount } from "../../Utils/math";
import {
  Dialog,
  MenuItem,
  TextField,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import {
  GetIdFromTransationType,
  GetTransactionTypeFromId,
} from "../../Utils/transactionHelpers";
import {
  GetCategoryFromId,
  GetCategoryNameListByType,
  GetIdFromCategory,
} from "../../Utils/categoryHelper";

// #endregion

// #region Component

function UpdateTransaction({ open, selectedTransaction, resetUpdateDialog }) {
  // #region Hooks
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.items);
  const transactionTypes = useSelector(
    (state) => state.setting.transactionType
  );

  useEffect(() => {
    if (selectedTransaction) {
      const typeName = GetTransactionTypeFromId(
        transactionTypes,
        selectedTransaction.typeId
      );

      const categoryName = GetCategoryFromId(
        categories,
        selectedTransaction.categoryId
      );

      const formData = {
        id: selectedTransaction.id,
        typeId: typeName,
        amount: selectedTransaction.amount,
        categoryId: categoryName,
        description: selectedTransaction.description,
        date: selectedTransaction.date,
      };

      setFormData(formData);
    }
  }, [selectedTransaction, categories, transactionTypes]);
  //#endregion

  // #region Derived Data
  const initialData = {
    id: "",
    typeId: "",
    amount: "",
    categoryId: "",
    description: "",
    date: "",
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
    console.log("payload : ", payload);
    dispatch(updateTransaction(payload));
    resetUpdateDialog();
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

  if (!selectedTransaction) return null;

  return (
    <>
      {/* {selectedTransaction && ( */}
      <Dialog open={open}>
        <form onSubmit={handleOnSubmit}>
          <DialogContent>
            <DialogTitle sx={{ padding: 0 }}> Update Transaction </DialogTitle>

            <TextField
              type="select"
              name="typeId"
              label="Type"
              sx={{ width: "13.8em" }}
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
              sx={{ width: "13.8em" }}
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
              sx={{ marginTop: "10px" }}
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
            <Button onClick={resetUpdateDialog}>Cancel</Button>
            <Button type="submit">Update</Button>
          </DialogActions>
        </form>
      </Dialog>
      {/* )} */}
    </>
  );
  // #endregion
}
// #endregion

export default UpdateTransaction;
