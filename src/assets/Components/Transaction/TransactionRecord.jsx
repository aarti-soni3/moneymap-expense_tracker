import { Chip, IconButton, TableCell, TableRow } from "@mui/material";
import { useSelector } from "react-redux";
import { formateFromYMDToDMY } from "../../Utils/date";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {
  GetTransactionTypeColorFromTypeId,
  GetTransactionTypeFromId,
} from "../../Utils/transactionHelpers";
import { GetCategoryFromId } from "../../Utils/categoryHelper";

function TransactionRecord({ transaction, handleOnUpdate, handleOnDelete }) {
  const { id, date, typeId, amount, title, categoryId, description } =
    transaction;

  const transactionType = useSelector((state) => state.setting.transactionType);
  const categories = useSelector((state) => state.category.items);

  const amountColor = GetTransactionTypeColorFromTypeId(
    transactionType,
    typeId
  );

  return (
    <>
      <TableRow hover role="checkbox" tabIndex={-1} key={id}>
        {/* TODO: used */}
        <TableCell align="left">{formateFromYMDToDMY(date)}</TableCell>

        <TableCell align="left">
          <Chip
            label={GetTransactionTypeFromId(transactionType, typeId)}
            sx={{ color: amountColor }}
          />
        </TableCell>

        <TableCell align="left" sx={{ color: amountColor, fontWeight: 600 }}>
          &#8377;{amount}
        </TableCell>

        <TableCell align="left" sx={{ fontWeight: 600 }}>
          {title}
        </TableCell>
        <TableCell align="left">
          {GetCategoryFromId(categories, categoryId)}
        </TableCell>

        <TableCell align="left">{description}</TableCell>

        <TableCell align="left">
          <IconButton onClick={() => handleOnUpdate(transaction)}>
            <EditOutlinedIcon sx={{ color: "primary.dark" }} />
          </IconButton>

          <IconButton onClick={() => handleOnDelete(transaction)}>
            <DeleteOutlineOutlinedIcon sx={{ color: "error.dark" }} />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
}

export default TransactionRecord;
