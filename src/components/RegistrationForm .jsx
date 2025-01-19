import { useForm, Controller } from "react-hook-form";
import * as Yup from "Yup";
import {
  Radio,
  FormControlLabel,
  RadioGroup,
  FormControl,
  Button,
  TextField,
  Container,
  IconButton,
  InputAdornment,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MySnackbar from "./MySnackBar";
import FormHelperText from "@mui/material/FormHelperText";
import ResponseModal from "./ResponseModal";

export function RegistrationForm() {
  const style = {
    width: "100%",
    marginBottom: 20,
  };
  const numberOfWhitespaces = 8;
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Поле обязательно для заполнения")
      .email("Введите корректный email"),
    password: Yup.string()
      .required("Поле обязательно для заполнения")
      .min(6, "Поле должно содержать минимум 6 символов")
      .matches(
        /[A-ZА-ЯЁ]/,
        "Пароль должен содержать хотя бы одну заглавную букву"
      ),
    confirmPassword: Yup.string()
      .required("Поле обязательно для заполнения")
      .oneOf([Yup.ref("password"), null], "Пароли не совпадают"),
    name: Yup.string().required("Поле обязательно для заполнения"),
    phoneNumber: Yup.string()
      .required("Поле обязательно для заполнения")
      .matches(/^\d+$/, "Поле должно содержать только цифры"),
    gender: Yup.string().required("Выберите пол"),
    birthday: Yup.date().required("Выберите дату"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [snackbarOn, setSnackbarOn] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    showResponse(data);
    reset();
  };
  const closeSnackbar = () => {
    setSnackbarOn(false);
  };

  const closeModal = () => {
    setOpenModal(false);
    setSnackbarOn(true);
  };

  const showResponse = (data) => {
    const jsonData = JSON.stringify(data, null, numberOfWhitespaces);
    setOpenModal(true);
    setModalData(jsonData);
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                placeholder="Enter your name"
                style={style}
                type="text"
                error={!!errors.name}
                helperText={errors.name ? errors.email.message : ""}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                placeholder="Enter your email"
                style={style}
                type="email"
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Password"
                style={style}
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={togglePasswordVisibility}
                          aria-label={
                            showPassword
                              ? "hide the password"
                              : "display the password"
                          }
                        >
                          {showPassword ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Confirm password"
                style={style}
                placeholder="Password"
                type="password"
                error={!!errors.confirmPassword}
                helperText={
                  errors.confirmPassword ? errors.confirmPassword.message : ""
                }
              />
            )}
          />
          <Controller
            name="phoneNumber"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Phone number"
                placeholder="375..."
                style={style}
                type="text"
                error={!!errors.phoneNumber}
                helperText={
                  errors.phoneNumber ? errors.phoneNumber.message : ""
                }
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">+</InputAdornment>
                    ),
                  },
                }}
              />
            )}
          />
          <Controller
            name="birthday"
            control={control}
            render={({ field }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  {...field}
                  label="Birthday"
                  value={field.value || null}
                  onChange={(newValue) => {
                    field.onChange(newValue);
                  }}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      variant: "outlined",
                      error: !!errors.birthday,
                      helperText: errors.birthday ? "Обязательное поле" : "",
                    },
                  }}
                />
              </LocalizationProvider>
            )}
          />
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <FormControl error={!!errors.gender}>
                <RadioGroup
                  {...field}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={field.value || ""}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                  }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
                <FormHelperText>
                  {errors.gender && <span>{errors.gender.message}</span>}
                </FormHelperText>
              </FormControl>
            )}
          />
          <Button
            size="medium"
            variant="contained"
            color="secondary"
            type="submit"
          >
            Register
          </Button>
          {snackbarOn && <MySnackbar closeModal={closeSnackbar} />}
          <ResponseModal
            openModal={openModal}
            closeModal={closeModal}
            data={modalData}
          />
        </form>
      </Container>
    </>
  );
}
