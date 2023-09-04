import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import SignIn from "../SignIn";

function Header() {
  return (
    <React.Fragment>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Company name
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Metors
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Studnet
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Stuff
            </Link>
          </nav>
          <Button
            onClick={signInHandler}
            variant="outlined"
            sx={{ my: 1, mx: 1.5 }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const signInHandler = () => {
  console.log("signInHandler");
  root.render(
    <React.StrictMode>
      <SignIn
        onSignIn={function (email: string, password: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    </React.StrictMode>
  );
};

export default Header;
