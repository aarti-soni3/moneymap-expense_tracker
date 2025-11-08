import { Box } from "@mui/material";

function CustomTabPanel({ children, value, index, sx, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ width: "100%", boxSizing: "border-box", ...sx }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default CustomTabPanel;
