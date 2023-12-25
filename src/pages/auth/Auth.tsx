import { FC, SyntheticEvent, useEffect, useState } from "react";
import "./auth.scss";
import { useAppDispatch } from "../../hooks/redux";
import { loginAction } from "redux/profile/actions";
import { Button, TextField, Typography } from "@mui/material";
import { getAllCategoriesAction } from "redux/products/actions";

const Auth: FC = () => {
  const dispatch = useAppDispatch();

  const [errorText, setErrorText] = useState("");

  const pressBtn = (event: SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      Email: { value: string };
      Password: { value: string };
    };
    const email = target.Email.value;
    const password = target.Password.value;

    email !== "" && password !== ""
      ? dispatch(loginAction({ email, password }))
      : setErrorText("Please enter a correct values");
  };

  useEffect(() => {
    return () => {
      dispatch(getAllCategoriesAction());
    };
  }, [dispatch]);

  return (
    <div className="auth">
      <div className="auth__container">
        <form onSubmit={pressBtn} className="auth__container__form">
          <Typography variant="h5">Welcome Back</Typography>
          <Typography variant="caption">
            Enter your email and password to sign in
          </Typography>
          <TextField label="Email" id="Email" size="small" />
          <TextField
            label="Password"
            type="password"
            id="Password"
            size="small"
          />
          <Button type="submit" variant="contained">
            Sign In
          </Button>
          <div
            className={
              errorText
                ? "auth__container__form__error active"
                : "auth__container__form__error"
            }
          >
            {errorText}
          </div>
        </form>
      </div>
      <div className="auth__decor">
        <Typography variant="h3">Cone Admin</Typography>
      </div>
    </div>
  );
};

export default Auth;
