import React from "react";
import "./form.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Link } from "react-router-dom";
import MyInput from "./MyInput/MyInput";

const schema = yup.object({
  name: yup.string().required("Обязательно для заполнения"),
  email: yup
    .string()
    .required("Обязательно для заполнения")
    .email("Почта не валидна"),
  password: yup
    .string()
    .min(6, "Пароль долэен сожержать от 6-ти символов")
    .required("Обязательно для заполнения"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), "Пароль должен совпадать"]),
}).required();

const MyForm = () => {
  const onSubmit = (data) => console.log(data);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  return (
    <form className="my__form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Регистрация</h1>
      <label htmlFor="name">
        <span>Имя</span>
        <MyInput
          type="text"
          id="name"
          style={errors.name && { border: "1px solid #FF6161" }}
          {...register("name")}
        />
        <p className="form__error">{errors.name?.message}</p>
      </label>
      <label htmlFor="email">
        <span>Электронная почта</span>
        <MyInput
          type="email"
          id="email"
          {...register("email", { required: true })}
          style={errors.email && { border: "1px solid #FF6161" }}
        />
        <p className="form__error">{errors.email?.message}</p>
      </label>
      <label htmlFor="password">
        <span>Пароль</span>
        <MyInput
          type="password"
          id="password"
          style={errors.password && { border: "1px solid #FF6161" }}
          {...register("password", { required: true, minLength: 6 })}
        />
        <p className="form__error">{errors.password?.message}</p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.7302 5.07319C11.1448 5.02485 11.5684 5 11.9999 5C16.6639 5 20.3998 7.90264 21.9999 12C21.6053 13.0104 21.0809 13.9482 20.4446 14.7877M6.51956 6.51944C4.47949 7.76406 2.90105 9.69259 1.99994 12C3.60008 16.0974 7.33597 19 11.9999 19C14.0375 19 15.8979 18.446 17.4805 17.4804M9.87871 9.87859C9.33576 10.4215 8.99994 11.1715 8.99994 12C8.99994 13.6569 10.3431 15 11.9999 15C12.8284 15 13.5785 14.6642 14.1214 14.1212"
            stroke="#808185"
          />
          <path d="M4 4L20 20" stroke="#808185" />
        </svg>
      </label>
      <label htmlFor="confirmPassword">
        <span>Подтвердите пароль</span>
        <input
          type="password"
          id="confirmPassword"
          style={errors.confirmPassword && { border: "1px solid #FF6161" }}
          {...register("confirmPassword", { required: true, minLength: 6 })}
        />
        <p className="form__error">{errors.confirmPassword?.message}</p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.7302 5.07319C11.1448 5.02485 11.5684 5 11.9999 5C16.6639 5 20.3998 7.90264 21.9999 12C21.6053 13.0104 21.0809 13.9482 20.4446 14.7877M6.51956 6.51944C4.47949 7.76406 2.90105 9.69259 1.99994 12C3.60008 16.0974 7.33597 19 11.9999 19C14.0375 19 15.8979 18.446 17.4805 17.4804M9.87871 9.87859C9.33576 10.4215 8.99994 11.1715 8.99994 12C8.99994 13.6569 10.3431 15 11.9999 15C12.8284 15 13.5785 14.6642 14.1214 14.1212"
            stroke="#808185"
          />
          <path d="M4 4L20 20" stroke="#808185" />
        </svg>
      </label>

      <Link to="/ourTeam">
       
        <button className="form__button" type="submit"  disabled={!isValid}>
          Зарегистрироваться
        </button>
      </Link>
    </form>
  );
};

export default MyForm;
