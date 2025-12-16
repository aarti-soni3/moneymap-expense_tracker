import {
  Chip,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { formateFromYMDToDMY } from "../../Utils/date";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {
  GetTransactionTypeColorFromTypeId,
  GetTransactionTypeFromId,
} from "../../Utils/transactionHelpers";
import {
  GetCategoryFromId,
  GetIconIdFromCategoryId,
} from "../../Utils/categoryHelper";
import DisplayMUIIcon from "../UI/DisplayMUIIcon";
import {
  getCategoryIconColor,
  getCategoryIconComponentName,
} from "../../Utils/icon";

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
        <TableCell align="left" sx={{ minWidth: "70px" }}>
          {formateFromYMDToDMY(date)}
        </TableCell>

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
        <TableCell
          align="left"
          sx={{
            display: "flex",
            fontSize: 15,
            alignItems: "flex-end",
            mt: { xs: "25px", sm: "20px", md: "8px" },
          }}
        >
          <DisplayMUIIcon
            iconName={getCategoryIconComponentName(
              GetIconIdFromCategoryId(categories, categoryId)
            )}
            color={getCategoryIconColor(
              GetIconIdFromCategoryId(categories, categoryId)
            )}
          />{" "}
          <Typography sx={{ ml: "5px" }}>
            {" "}
            {GetCategoryFromId(categories, categoryId)}
          </Typography>
        </TableCell>

        <TableCell align="left">{description}</TableCell>

        <TableCell align="left" sx={{ minWidth: { xs: "80px" } }}>
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
