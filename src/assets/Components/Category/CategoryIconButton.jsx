import { IconButton } from "@mui/material";
import DisplayMUIIcon from "../UI/DisplayMUIIcon";

function CategoryIconButton({
  iconId,
  iconComponent,
  iconColor,
  isSelected,
  handleOnButtonClick,
}) {
  const iconStyle = {
    border: isSelected ? "2px solid" : "1px solid",
    borderColor: isSelected ? iconColor : "grey.300",
    margin: "2px",
  };

  const handleOnClick = (event) => {
    handleOnButtonClick(event.currentTarget.id);
  };

  return (
    <>
      <IconButton
        id={iconId}
        onClick={handleOnClick}
        key={iconId}
        sx={iconStyle}
      >
        <DisplayMUIIcon iconName={iconComponent} color={iconColor} />
      </IconButton>
    </>
  );
}

export default CategoryIconButton;
