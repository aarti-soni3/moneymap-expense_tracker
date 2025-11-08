import { Button, TableCell,TableRow } from "@mui/material";
import { useSelector } from "react-redux";
import { formateFromYMDToDMY } from "../../Utils/date";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {
  GetCategoryFromId,
  GetTransactionTypeFromId,
} from "../../Utils/transactionHelpers";

function TransactionRecord({ transaction, handleOnUpdate, handleOnDelete }) {
  const { id, date, typeId, amount, title, categoryId, description } =
    transaction;

  const transactionType = useSelector((state) => state.setting.transactionType);
  const categories = useSelector((state) => state.category.items);

  return (
    <>
      <TableRow hover role="checkbox" tabIndex={-1} key={id}>
        {/* TODO: used */}
        <TableCell align="left">{formateFromYMDToDMY(date)}</TableCell>

        <TableCell align="left">
          {GetTransactionTypeFromId(transactionType, typeId)}
        </TableCell>

        <TableCell align="left">${amount}</TableCell>

        <TableCell align="left">{title}</TableCell>
        <TableCell align="left">
          {GetCategoryFromId(categories, categoryId)}
        </TableCell>

        <TableCell align="left">{description}</TableCell>

        <TableCell align="left">
          <Button onClick={() => handleOnUpdate(transaction)}>
            <EditOutlinedIcon />
          </Button>

          <Button onClick={() => handleOnDelete(transaction)}>
            <DeleteOutlineOutlinedIcon />
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
}

export default TransactionRecord;
