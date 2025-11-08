import { Icon } from "@mui/material";
import { getNameFromIconComponent } from "../../Utils/icon";

function DisplayMUIIcon({ iconName, color }) {
  const defaultColor = "gray";

  const icon = getNameFromIconComponent(iconName);
  const finalColor = color ? color : defaultColor;
  return <Icon sx={{ color: finalColor }}> {icon}</Icon>;
}

export default DisplayMUIIcon;
