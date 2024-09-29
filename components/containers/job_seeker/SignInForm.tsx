'use client';
import { Divider, SocialLogin } from '@/components/common';
import LoadingCircle from '@/components/shared/loading-circle/LoadingCircle';
import { Button } from '@/components/ui/button';
import { loginValidationSchema } from '@/utils/validation-schemas';
import { Formik, FormikHelpers } from 'formik';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast, Toaster } from 'sonner';

const SignInForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: any, actions: FormikHelpers<any>) => {
    setLoading(true);
    const loadingToast = toast.loading('Signing in...', {
      position: 'top-left',
      // autoClose: false
    });

    try {
      const { email, password } = values;
      console.log('login values', values);

      const res = await signIn('credentials', {
        redirect: false,
        email,
        password,
        // callbackUrl: '/',
      });

      if (res?.error) {
        toast.error(res.error, {
          className: 'text-primary',
          duration: 4000,
        });
      }
      if (res?.ok) {
        toast.success('Login successful');
        router.push('/');
      }
      toast.dismiss(loadingToast);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      toast.error(error.message, {
        duration: 5000, // Time in milliseconds (5000ms = 5 seconds)
      });
      actions.setErrors({ email: error.message || 'An error occurred' });
    }
    actions.setSubmitting(false);
  };

  return (
    <>
      <Toaster richColors position="top-center" duration={4000} />
      <div className="w-full">
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginValidationSchema}
          validateOnChange={false}
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
            <div className=" ">
              <form
                action=""
                onSubmit={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleSubmit(e);
                }}
              >
                <div className="mx-auto flex w-[90%] flex-1 flex-col justify-center pt-10 md:w-[350px] lg:w-[450px]">
                  <div className="mb-8 text-center">
                    <h3 className="mb-2 mt-8 text-xl font-700 text-white">
                      Sign In
                    </h3>
                    <p className="text-sm font-400 text-text6">
                      Use social media accounts
                    </p>
                  </div>

                  <div>
                    <div className="flex w-full items-center justify-center bg-transparent">
                      <SocialLogin />
                    </div>
                  </div>

                  <Divider text="Or with email" />

                  <div className="mb-4">
                    {/* <label
                                        htmlFor="email" className='block text-primary  text-sm font-apercu-medium  mb-1'>Email</label> */}
                    <input
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      type="email"
                      style={{ backgroundColor: 'rgba(255,255,255,.1)' }}
                      className={`block w-full rounded-md border-none p-3 py-1.5 text-sm font-400 text-white shadow-sm outline-none focus:ring-indigo-500 sm:text-base sm:leading-6 ${errors.email ? 'border-red-500' : 'border'}`}
                      placeholder="Email"
                    />
                    <p
                      data-state="show"
                      className="text-red-500 data-show:animate-slide-down-normal data-hide:animate-slide-up-normal mt-1 text-sm transition-all"
                    >
                      {errors.email}
                    </p>
                  </div>

                  <div className="mb-1">
                    <div className="mb-1 flex items-center justify-between">
                      {/* <label htmlFor="password" className='block text-foreground-light text-sm mb-1'>Password</label> */}
                    </div>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      onChange={handleChange}
                      style={{ backgroundColor: 'rgba(255,255,255,.1)' }}
                      className={`block w-full rounded-md border-none p-3 py-1.5 text-sm font-400 text-white shadow-sm outline-none focus:ring-indigo-500 sm:text-base sm:leading-6 ${errors.password ? 'border-red-500' : 'border-control'}`}
                      placeholder="Password"
                    />
                    <p
                      data-state="show"
                      className="text-red-500 data-show:animate-slide-down-normal data-hide:animate-slide-up-normal mt-1 text-sm transition-all"
                    >
                      {errors.password}
                    </p>
                  </div>
                  <div className="mb-6 text-end">
                    <Link
                      href="/ab/account-security/reset-password"
                      className="text-sm font-600 text-theme1"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <Button
                    className={`font-regular border-brand relative cursor-pointer space-x-2 rounded-md py-5 text-center text-white shadow-sm outline-none outline-0 transition-all duration-200 ease-out ${
                      loading
                        ? 'pointer-events-none rounded-full bg-theme1 opacity-35 hover:bg-theme1'
                        : 'hover:bg-bg-theme1 pointer-events-auto rounded-full bg-theme1'
                    }`}
                  >
                    {loading && <LoadingCircle />}
                    Sign In
                  </Button>

                  <div className="my-8 self-center text-sm font-light text-text6">
                    <span className="text-gray400 font-400">
                      Not a Member yet?
                    </span>
                    <Link
                      href="/nx/signup"
                      className="ml-1 cursor-pointer font-600 text-theme1"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default SignInForm;
