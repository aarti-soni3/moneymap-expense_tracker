import { createTheme, ThemeProvider } from "@mui/material";

// ===================================================================
// EXPENSE TRACKER - MATERIAL-UI THEME CONFIGURATION
// ===================================================================

function CustomThemeProvider({ children }) {
  const theme = createTheme({
    palette: {
      // PRIMARY COLOR - Main brand color
      // Used for: Primary buttons, links, active states, main navigation
      // Examples: "Add Transaction" button, active tabs, focused inputs
      primary: {
        main: "#3B82F6", // Blue 500 - Main primary color
        light: "#60A5FA", // Blue 400 - Hover states
        dark: "#2563EB", // Blue 600 - Active/pressed states
        contrastText: "#FFFFFF", // White text on primary color
      },

      // SECONDARY COLOR - Supporting brand color
      // Used for: Secondary buttons, chips, badges, icons
      // Examples: Category icons, status badges, floating action buttons
      secondary: {
        main: "#8B5CF6", // Violet 500 - Main secondary color
        light: "#A78BFA", // Violet 400 - Hover states
        dark: "#7C3AED", // Violet 600 - Active states
        contrastText: "#FFFFFF", // White text on secondary color
      },

      // ERROR COLOR - For expenses and destructive actions
      // Used for: Expense amounts, delete buttons, error messages, form validation
      // Examples: "-₹250.75" in red, delete category button, required field errors
      error: {
        main: "#EF4444", // Red 500 - Main error/expense color
        light: "#F87171", // Red 400 - Hover states
        dark: "#DC2626", // Red 600 - Active states
        contrastText: "#FFFFFF", // White text on error color
      },

      // WARNING COLOR - For transfers and alerts
      // Used for: Transfer transactions, warning messages, pending states
      // Examples: Transfer badge, low balance warnings, confirmation dialogs
      warning: {
        main: "#F59E0B", // Amber 500 - Main warning color
        light: "#FBBF24", // Amber 400 - Hover states
        dark: "#D97706", // Amber 600 - Active states
        contrastText: "#FFFFFF", // White text on warning color
      },

      // SUCCESS COLOR - For income and positive actions
      // Used for: Income amounts, success messages, completed states
      // Examples: "+₹5000" in green, success notifications, positive growth indicators
      success: {
        main: "#10B981", // Emerald 500 - Main success/income color
        light: "#34D399", // Emerald 400 - Hover states
        dark: "#059669", // Emerald 600 - Active states
        contrastText: "#FFFFFF", // White text on success color
      },

      // INFO COLOR - For informational elements
      // Used for: Information messages, tips, neutral badges
      // Examples: Info tooltips, help text, neutral status indicators
      info: {
        main: "#06B6D4", // Cyan 500 - Main info color
        light: "#22D3EE", // Cyan 400 - Hover states
        dark: "#0891B2", // Cyan 600 - Active states
        contrastText: "#FFFFFF", // White text on info color
      },

      // BACKGROUND COLORS
      // Used for: Page backgrounds, card backgrounds, paper elements
      background: {
        default: "#F9FAFB", // Light gray - Main page background
        paper: "#FFFFFF", // White - Cards, modals, dialogs
      },

      // TEXT COLORS
      // Used for: All text content throughout the application
      text: {
        primary: "#1F2937", // Dark gray - Main text (headings, body)
        secondary: "#6B7280", // Medium gray - Secondary text (descriptions, labels)
        disabled: "#9CA3AF", // Light gray - Disabled text, placeholders
      },

      // DIVIDER COLOR
      // Used for: Borders, dividers, separators
      divider: "#E5E7EB", // Gray 200 - Lines between elements

      // ADDITIONAL CUSTOM COLORS FOR EXPENSE TRACKER
      // These are custom colors for specific use cases
      custom: {
        // Category background colors (18 vibrant colors)
        categoryColors: {
          red: "#EF4444", // Food & Dining, Emergency
          orange: "#F97316", // Utilities, Bills
          amber: "#F59E0B", // Shopping, Retail
          yellow: "#EAB308", // Subscriptions
          lime: "#84CC16", // Groceries, Fresh Food
          green: "#22C55E", // Salary, Primary Income
          emerald: "#10B981", // Investments, Savings
          teal: "#14B8A6", // Healthcare, Wellness
          cyan: "#06B6D4", // Entertainment
          sky: "#0EA5E9", // Travel, Vacation
          blue: "#3B82F6", // Transportation
          indigo: "#6366F1", // Education
          violet: "#8B5CF6", // Fitness, Sports
          purple: "#A855F7", // Personal Care
          fuchsia: "#D946EF", // Gifts, Donations
          pink: "#EC4899", // Fashion, Beauty
          rose: "#F43F5E", // Love, Relationships
          slate: "#64748B", // Other, Miscellaneous
        },

        // Gradient backgrounds for summary cards
        gradients: {
          // income: "linear-gradient(135deg, #10B981 0%, #059669 100%)", // Green gradient // AI emraled
          // income: " linear-gradient(135deg,#1bc48cff 0%, #059669ff 100%)", // Green gradient //Custom Changed
          income: " linear-gradient(135deg, #21C25C 0%, #17a54b 100%)", // Green gradient // AI green
          expense: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)", // Red gradient
          balance: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)", // Blue gradient
          brand: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)", // Blue to Violet
        },

        // Chart colors for data visualization
        // chartColors: [
        //   "#EF4444", // Red - Food & Dining
        //   "#06B6D4", // Cyan - Entertainment
        //   "#8B5CF6", // Violet - Health & Wellness
        //   "#3B82F6", // Blue - Transportation
        //   "#F59E0B", // Amber - Shopping
        //   "#10B981", // Green - Income
        //   "#EC4899", // Pink - Personal
        //   "#6366F1", // Indigo - Education
        // ],
      },
    },

    // TYPOGRAPHY CONFIGURATION
    // Defines font styles throughout the app
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',

      // Page titles
      h1: {
        fontSize: "2rem", // 32px
        fontWeight: 700,
        color: "#1F2937",
      },

      // Section headers
      h2: {
        fontSize: "1.5rem", // 24px
        fontWeight: 600,
        color: "#1F2937",
      },

      // Card titles
      h3: {
        fontSize: "1.125rem", // 18px
        fontWeight: 600,
        color: "#1F2937",
      },

      // Body text
      body1: {
        fontSize: "0.875rem", // 14px
        color: "#1F2937",
      },

      // Secondary text
      body2: {
        fontSize: "0.8125rem", // 13px
        color: "#6B7280",
      },

      // Button text
      button: {
        textTransform: "none", // Don't uppercase buttons
        fontWeight: 500,
      },
    },

    // COMPONENT OVERRIDES
    // Customizes default MUI component styles
    components: {
      // Button styles
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "0.5rem", // 8px rounded corners
            padding: "0.5rem 1rem", // 8px 16px
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          },
        },
      },

      // Card styles
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: "1rem", // 16px rounded corners
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
            border: "1px solid #E5E7EB",
          },
        },
      },

      // Paper/Dialog styles
      MuiPaper: {
        styleOverrides: {
          rounded: {
            borderRadius: "1rem", // 16px rounded corners
          },
        },
      },

      // Chip/Badge styles
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: "9999px", // Fully rounded
            fontWeight: 500,
          },
        },
      },

      // Input field styles
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: "0.5rem", // 8px rounded corners
            },
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
export default CustomThemeProvider;

// ===================================================================
// USAGE EXAMPLES
// ===================================================================

/*
// 1. Wrap your app with ThemeProvider
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <YourComponents />
    </ThemeProvider>
  );
}

// 2. Use theme colors in components
import { Button } from '@mui/material';

// Primary button (blue)
<Button variant="contained" color="primary">
  Add Transaction
</Button>

// Success button (green) for income
<Button variant="contained" color="success">
  Add Income
</Button>

// Error button (red) for delete
<Button variant="contained" color="error">
  Delete
</Button>

// 3. Use custom colors with sx prop
import { Box, Typography } from '@mui/material';

<Box sx={{ bgcolor: 'custom.categoryColors.red', p: 2, borderRadius: 2 }}>
  <Typography>Food & Dining</Typography>
</Box>

// 4. Access theme in styled components
import { styled } from '@mui/material/styles';

const GradientCard = styled(Box)(({ theme }) => ({
  background: theme.palette.custom.gradients.income,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2)
}));

// 5. Use theme hook in components
import { useTheme } from '@mui/material/styles';

function MyComponent() {
  const theme = useTheme();
  
  return (
    <div style={{ color: theme.palette.text.primary }}>
      Content
    </div>
  );
}
*/
