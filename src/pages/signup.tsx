import { useState } from "react";
import { Errors, UserData, ValidationResult } from "../types";

import Input from "../components/ui/input";
import Logo from "../components/ui/logo";
import SwitchInput from "../components/ui/switch-input";
import Button from "../components/ui/button";
import PasswordInput from "../components/ui/password-input";

import googleLogo from "../assets/icons/google-logo.svg";
import spinner from "../assets/icons/spinner.svg";

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [passwordIsShowing, setPasswordIsShowing] = useState(false);
  const [isRememberMeActive, setIsRememberMeActive] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Errors>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChangeUserData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUserData((prev) => {
      const newData = { ...prev, [name]: value };
      return newData;
    });
  };

  const handleShowPassword = () => {
    setPasswordIsShowing((prev) => !prev);
  };

  const handleToogleSwitch = () => {
    setIsRememberMeActive((prev) => !prev);
  };

  const validateFormData = (): ValidationResult => {
    const totalFields = 2; // Total de campos a serem validados
    let validFields = 0;
    let errors: Errors = {};

    // Validação de e-mail com RegEx
    if (userData.email) {
      const emailPattern =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      if (emailPattern.test(userData.email)) {
        validFields += 1;
      } else {
        errors.email = "E-mail inválido";
      }
    } else {
      errors.email = "O campo de e-mail é obrigatório";
    }

    if (userData.password) {
      const passwordPattern = /^.{6,}$/;
      if (passwordPattern.test(userData.password)) {
        validFields += 1;
      } else {
        errors.password = "A senha deve ter pelo menos 6 caracteres";
      }
    } else {
      errors.password = "O campo de senha é obrigatório";
    }

    if (userData.confirmPassword !== userData.password) {
      errors.confirmPassword = "A senhas devem ser iguais!";
    }

    // Calcula o progresso com base no número de campos válidos
    const progress = (validFields / totalFields) * 100;

    return { progress, errors };
  };

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationResult = validateFormData();

    setErrors(validationResult.errors);

    const hasErrors = Object.values(validationResult.errors).some(
      (error) => error
    );

    if (hasErrors) {
      return;
    }

    setIsLoading(true);

    // Simula uma requisição POST com um atraso de 2 segundos
    setTimeout(() => {
      setIsLoading(false);
      alert("Formulário de Sign In enviado com sucesso!");

      setUserData({
        email: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({ email: "", password: "" });
    }, 2000); //
  };

  return (
    <main className="flex h-full w-full justify-center items-center sm:pt-0 pt-8">
      <aside className="bg-[url('assets/images/login-hero-image.jpg')] bg-gray-200 h-full bg-center bg-cover bg-no-repeat w-full min-h-screen hidden sm:block" />

      <form
        className="sm:max-w-[430px] w-full flex flex-col-reverse sm:flex-col justify-center px-6 gap-12 items"
        onSubmit={handleSignIn}
      >
        <Logo />

        <div className="flex flex-col gap-6">
          <h1 className="font-poppins font-semibold text-xl">
            Nice to see you again
          </h1>

          <div className="flex flex-col gap-4">
            <Input
              id="email"
              name="email"
              type="text"
              placeholder="Email or phone number"
              aria-label="Email input field"
              aria-required="true"
              label="Login"
              autoComplete="email"
              value={userData.email}
              onChange={handleChangeUserData}
              error={errors.email}
            />

            <PasswordInput
              type={passwordIsShowing ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter password"
              autoComplete="current-password"
              label="Password"
              aria-label="Password input field"
              aria-required="true"
              value={userData.password}
              onChange={handleChangeUserData}
              handleShowPassword={handleShowPassword}
              passwordIsShowing={passwordIsShowing}
              error={errors.password}
            />

            <div className="flex items-center justify-between">
              <SwitchInput
                isToggled={isRememberMeActive}
                handleToggle={handleToogleSwitch}
                label="Remember me"
                aria-label="Toggle remember me"
              />

              <a href="#" className="text-[#007AFF] text-sm">
                Forgot password?
              </a>
            </div>

            <div className="flex flex-col gap-8 mt-4">
              <Button
                className="bg-[#007AFF]"
                type="submit"
                aria-label="Sign in button"
                disabled={isLoading}
              >
                {isLoading ? (
                  <img src={spinner} alt="loading" />
                ) : (
                  <span>Registar</span>
                )}
              </Button>

              <hr />

              <Button
                className="bg-[#333333] gap-2"
                aria-label="Sign in with Google"
                type="button"
              >
                <img src={googleLogo} alt="google logo" />
                <span>Ou entre com Google</span>
              </Button>
            </div>
          </div>

          <div className="flex text-xs items-center justify-center gap-2">
            <span>DJa tem uma conta?</span>
            <a className="text-[#007AFF] cursor-pointer">Sign up now</a>
          </div>
        </div>
      </form>
    </main>
  );
}

export default SignUp;
