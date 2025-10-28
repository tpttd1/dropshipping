import React from 'react';
import { Facebook, Github, Mail, Twitter } from 'lucide-react';

// Image
import logoLight from 'assets/images/logo-light.png';
import logoDark from 'assets/images/logo-dark.png';
import { Link } from 'react-router-dom';

const RegisterCover = () => {
  document.title = 'Register | Tailwick - React Admin & Dashboard Template';

  React.useEffect(() => {
    const bodyElement = document.body;

    bodyElement.classList.add(
      'flex',
      'items-center',
      'justify-center',
      'min-h-screen',
      'py-16',
      'bg-cover',
      'bg-auth-pattern',
      'dark:bg-auth-pattern-dark',
      'dark:text-zink-100',
      'font-public'
    );

    return () => {
      bodyElement.classList.remove(
        'flex',
        'items-center',
        'justify-center',
        'min-h-screen',
        'py-16',
        'bg-cover',
        'bg-auth-pattern',
        'dark:bg-auth-pattern-dark',
        'dark:text-zink-100',
        'font-public'
      );
    };
  }, []);

  return (
    <React.Fragment>
      <div className="mb-0 border-none lg:w-[500px] card bg-white/70 shadow-none dark:bg-zink-500/70">
        <div className="!px-10 !py-12 card-body">
          <Link to="/">
            <img
              src={logoLight}
              alt=""
              className="hidden h-6 mx-auto dark:block"
            />
            <img
              src={logoDark}
              alt=""
              className="block h-6 mx-auto dark:hidden"
            />
          </Link>

          <div className="mt-8 text-center">
            <h4 className="mb-1 text-custom-500 dark:text-custom-500">
              Create your free account
            </h4>
            <p className="text-slate-500 dark:text-zink-200">
              Get your free Tailwick account now
            </p>
          </div>

          <form action="/" className="mt-10" id="registerForm">
            <div className="mb-3">
              <label
                htmlFor="email-field"
                className="inline-block mb-2 text-base font-medium"
              >
                Email
              </label>
              <input
                type="text"
                id="email-field"
                className="form-input dark:bg-zink-600/50 border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                placeholder="Enter email"
              />
              <div
                id="email-error"
                className="hidden mt-1 text-sm text-red-500"
              >
                Please enter a valid email address.
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="username-field"
                className="inline-block mb-2 text-base font-medium"
              >
                UserName
              </label>
              <input
                type="text"
                id="username-field"
                className="form-input dark:bg-zink-600/50 border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                placeholder="Enter username"
              />
              <div
                id="username-error"
                className="hidden mt-1 text-sm text-red-500"
              >
                Please enter a username.
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="password"
                className="inline-block mb-2 text-base font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-input dark:bg-zink-600/50 border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                placeholder="Enter password"
              />
              <div
                id="password-error"
                className="hidden mt-1 text-sm text-red-500"
              >
                Password must be at least 8 characters long and contain both
                letters and numbers.
              </div>
            </div>
            <p className="italic text-15 text-slate-500 dark:text-zink-200">
              By registering you agree to the Tailwick{' '}
              <a href="#!" className="underline">
                Terms of Use
              </a>
            </p>
            <div className="mt-10">
              <button
                type="submit"
                className="w-full text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
              >
                Sign In
              </button>
            </div>

            <div className="relative text-center my-9 before:absolute before:top-3 before:left-0 before:right-0 before:border-t before:border-t-slate-200 dark:before:border-t-zink-500">
              <h5 className="inline-block px-2 py-0.5 text-sm bg-white text-slate-500 dark:bg-zink-600 dark:text-zink-200 rounded relative">
                Create account with
              </h5>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <button
                type="button"
                className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 active:text-white active:bg-custom-600 active:border-custom-600"
              >
                <Facebook className="size-4"></Facebook>
              </button>
              <button
                type="button"
                className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-white btn bg-orange-500 border-orange-500 hover:text-white hover:bg-orange-600 hover:border-orange-600 focus:text-white focus:bg-orange-600 focus:border-orange-600 active:text-white active:bg-orange-600 active:border-orange-600"
              >
                <Mail className="size-4"></Mail>
              </button>
              <button
                type="button"
                className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-white btn bg-sky-500 border-sky-500 hover:text-white hover:bg-sky-600 hover:border-sky-600 focus:text-white focus:bg-sky-600 focus:border-sky-600 active:text-white active:bg-sky-600 active:border-sky-600"
              >
                <Twitter className="size-4"></Twitter>
              </button>
              <button
                type="button"
                className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-white btn bg-slate-500 border-slate-500 hover:text-white hover:bg-slate-600 hover:border-slate-600 focus:text-white focus:bg-slate-600 focus:border-slate-600 active:text-white active:bg-slate-600 active:border-slate-600"
              >
                <Github className="size-4"></Github>
              </button>
            </div>

            <div className="mt-10 text-center">
              <p className="mb-0 text-slate-500 dark:text-zink-200">
                Already have an account ?{' '}
                <Link
                  to="/auth-login-basic"
                  className="font-semibold underline transition-all duration-150 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500"
                >
                  Login
                </Link>{' '}
              </p>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RegisterCover;
