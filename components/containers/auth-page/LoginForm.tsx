'use client';
import { LoginValidationSchema } from '@/utils/validation-schemas';
import { Formik, FormikHelpers } from 'formik';
import React, { useState } from 'react';
import { FaCheck, FaTimes, FaExclamationTriangle } from 'react-icons/fa';
import { Input } from '@/components/ui/input';
import { KeyRound, LockKeyhole, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import GoogleButton from 'react-google-button';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import LoadingCircle from '@/components/shared/loading-circle/LoadingCircle';
import { toast } from 'sonner';

const STRONG = 'Strong';
const MEDIUM = 'Medium';
const WEAK = 'Weak';
const MATCHED = 'Matched';
const UNMATCHED = 'Unmatched';

const activeTab =
  'border-b-2 transition-all   ease-in-out duration-300 w-full border-primary cursor-pointer  text-primary';
const normalTab =
  'border-b-2 transition-all  ease-in-out duration-300 w-full border-transparent cursor-pointer text-purple';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginTab, setLoginTab] = useState(0);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: any, actions: FormikHelpers<any>) => {
    setLoading(true);
    try {
      const { email, password } = values;
      let response: any = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (!response.ok) {
        throw new Error(response.error);
      }
      setLoading(false);
      router.push('/');
    } catch (error: any) {
      actions.setErrors({ email: error.message || 'An error occurred' });
      toast.error(error.message, {
        duration: 5000,
      });
      setLoading(false);
    }
    actions.setSubmitting(false);
  };

  const signInWithGoogle = async (event: any) => {
    try {
      event.preventDefault();
      await signIn('google', { callbackUrl: '/' });
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="shadow-shadow_dark mx-auto w-[500px] rounded-[30px] bg-white p-8">
        <legend className="mb-2 text-center text-[35px] font-extrabold text-purple">
          Welcome to <span className="text-primary">Jobber</span>
        </legend>
        <ul className="mt-4 flex items-center justify-between text-center">
          <li
            onClick={() => setLoginTab(0)}
            className={`${loginTab == 0 ? activeTab : normalTab}`}
          >
            Student
          </li>
          <li
            onClick={() => setLoginTab(1)}
            className={`${loginTab == 1 ? activeTab : normalTab}`}
          >
            Employer / T&P
          </li>
        </ul>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginValidationSchema}
          validateOnChange={true}
          validateOnBlur={false}
          onSubmit={(values, actions) => {
            onSubmit(values, actions);
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <div>
              <form
                onSubmit={(e) => {
                  e.stopPropagation();
                  handleSubmit(e);
                }}
              >
                {loginTab == 0 && (
                  <div>
                    <button
                      onClick={signInWithGoogle}
                      type="button"
                      className="my-6 mb-2 me-2 flex w-full items-center justify-center rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50 dark:focus:ring-[#4285F4]/55"
                    >
                      <svg
                        className="me-2 h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 19"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Login with Google
                    </button>
                    <hr className="my-7" />
                  </div>
                )}

                <div className="mb-5 mt-8">
                  <div className="flex">
                    <button className="rounded-bl-[5px] rounded-tl-[5px] bg-[#e9ecef] p-3">
                      <User size={20} />
                    </button>

                    <input
                      name="email"
                      id="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      type="email"
                      placeholder="john@example.com"
                      className="border-purple-light focus:border-primary focus:text-primary h-[60px] w-full rounded-br-[12px] rounded-tr-[12px] border px-[20px] py-[5px] text-[16px] font-medium text-purple outline-8 focus:outline-0"
                    />
                  </div>
                  <p className="text-red-500 py-1 text-[14px]">
                    {errors.email}
                  </p>
                </div>

                <div>
                  <div className="flex">
                    <button className="rounded-bl-[5px] rounded-tl-[5px] bg-[#e9ecef] p-3">
                      <LockKeyhole size={20} />
                    </button>
                    <input
                      name="password"
                      id="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Must be  atleast 6 characters"
                      className="border-purple-light focus:border-primary focus:text-primary h-[60px] w-full rounded-br-[12px] rounded-tr-[12px] border px-[20px] py-[5px] text-[16px] font-medium text-purple outline-8 focus:outline-0"
                    />
                    <button
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="block h-[60px] w-[30px] rounded-br-[12px] rounded-tr-[12px] bg-[#6c757d]"
                    ></button>
                  </div>
                  <p className="text-red-500 py-1 text-[14px]">
                    {errors.password}
                  </p>
                </div>
                <div className="mt-4 flex justify-end">
                  <Link
                    href="/login/forgot_password"
                    className="text-primary cursor-pointer text-[14px] font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Button
                  className={`mt-6 w-full ${loading && 'pointer-events-none cursor-not-allowed'}`}
                >
                  {loading ? (
                    <span>
                      {' '}
                      <LoadingCircle /> Loading...
                    </span>
                  ) : (
                    'Login'
                  )}
                </Button>
                <div className="mt-3 text-center">
                  New to Pear? Register (
                  <Link
                    href="/registration/candidate"
                    className="text-primary font-medium"
                  >
                    Candidate
                  </Link>{' '}
                  /{' '}
                  <Link
                    href="/hire-talent"
                    className="text-primary font-medium"
                  >
                    Recruiter
                  </Link>
                  )
                </div>
              </form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
