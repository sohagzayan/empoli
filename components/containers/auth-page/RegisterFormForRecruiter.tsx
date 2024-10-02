'use client';
import LoadingCircle from '@/components/shared/loading-circle/LoadingCircle';
import { Button } from '@/components/ui/button';
import { registerValidationAsRecruiterSchema } from '@/utils/validation-schemas';
import { Formik, FormikHelpers } from 'formik';
import { KeyRound } from 'lucide-react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { toast } from 'sonner';

const STRONG = 'Strong';
const MEDIUM = 'Medium';
const WEAK = 'Weak';
const MATCHED = 'Matched';
const UNMATCHED = 'Unmatched';

const RegisterFormForRecruiter = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState();

  const [passwordState, setPasswordState] = useState({
    showPasswordCriteria: false,
    conditions: {
      lowercase: false,
      uppercase: false,
      number: false,
      specialChar: false,
      length: false,
    },
    passwordStrength: '',
    confirmPasswordStrength: '',
    progress: '',
  });

  const handlePasswordChange = (e: any) => {
    const password = e.target.value;

    const checks: any = {
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      specialChar: /[!@#$%^&*()\-_=+{};:,<.>]/.test(password),
      length: password.length >= 6,
    };

    const verifiedListLength = Object.values(checks).filter(
      (value) => value,
    ).length;

    const passwordStrength =
      verifiedListLength == 5
        ? STRONG
        : verifiedListLength >= 2
          ? MEDIUM
          : WEAK;

    setPasswordState({
      ...passwordState,
      conditions: checks,
      progress: `${(verifiedListLength / 5) * 100}%`,
      passwordStrength,
      showPasswordCriteria: verifiedListLength < 5,
    });
  };

  const handleConfirmPasswordChange = (password: string, cpassword: string) => {
    if (password !== '' && cpassword !== '') {
      if (password === cpassword) {
        setPasswordState({
          ...passwordState,
          progress: '',
          passwordStrength: MATCHED,
          confirmPasswordStrength: MATCHED,
          showPasswordCriteria: false,
        });
      } else
        setPasswordState({
          ...passwordState,
          confirmPasswordStrength: UNMATCHED,
        });
    } else
      setPasswordState({
        ...passwordState,
        confirmPasswordStrength: UNMATCHED,
      });
  };

  const getActiveColor = (strength: string) => {
    if (strength === STRONG || strength === MATCHED) return '#00bc8c';
    if (strength === MEDIUM) return '#f39c12';
    if (strength === WEAK || strength === UNMATCHED) return '#e74c3c';
    return '';
  };

  // const renderPasswordIcon = (strength: string) => {
  //   if (strength === STRONG || strength === MATCHED) {
  //     return <FaCheck className="h-5 w-5" />;
  //   } else if (strength === MEDIUM) {
  //     return <FaExclamationTriangle className="h-5 w-5" />;
  //   } else if (strength === WEAK || strength === UNMATCHED) {
  //     return <FaTimes className="h-5 w-5" />;
  //   } else return;
  // };

  const onSubmit = async (values: any, actions: FormikHelpers<any>) => {
    setLoading(true);
    try {
      const { email, password, firstName, lastName } = values;
      console.log('values', values);
      const response: any = await fetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
          role: 'RECRUITER',
          firstName,
          lastName,
          phone,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      await signIn('credentials', {
        email,
        password,
        callbackUrl: '/',
      });
      setLoading(false);
      toast.success(data.message);
    } catch (error: any) {
      setLoading(false);
      toast.error(error.message);
      actions.setErrors({ email: error.message || 'An error occurred' });
    }
    actions.setSubmitting(false);
  };
  const {
    // showPasswordCriteria,
    // conditions,
    passwordStrength,
    // confirmPasswordStrength,
    progress,
  } = passwordState;

  return (
    <div>
      <div className="shadow-shadow_dark relative z-50 mx-auto my-4 w-[600px] rounded-[30px] bg-white p-10">
        <Formik
          initialValues={{
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            cpassword: '',
          }}
          validationSchema={registerValidationAsRecruiterSchema}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={(values, actions) => {
            onSubmit(values, actions);
          }}
        >
          {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
            <div>
              <form
                onSubmit={(e) => {
                  e.stopPropagation();
                  handleSubmit(e);
                }}
              >
                <legend className="mb-2 text-center text-[35px] font-extrabold text-purple">
                  User Registration
                </legend>
                <span className="text-light my-4 block text-[14px] text-purple">
                  * Required field
                </span>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[14px] text-purple"
                  >
                    Official Email Id
                  </label>
                  <input
                    name="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    type="email"
                    placeholder="name@company.com"
                    className="border-purple-light focus:border-primary focus:text-primary h-[60px] w-full rounded-[12px] border px-[20px] py-[5px] text-[16px] font-medium text-purple outline-8 placeholder:text-[14px] placeholder:font-light focus:outline-0"
                  />
                  <p className="text-red-500 py-1 text-[14px] font-light">
                    {errors.email}
                  </p>
                </div>
                <div className="mb-5 flex items-center gap-5">
                  <div className="">
                    <label
                      htmlFor="name"
                      className="mb-2 block text-[14px] text-purple"
                    >
                      Fast Name *
                    </label>
                    <input
                      name="firstName"
                      id="firstName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                      type="text"
                      placeholder="Your Fast Name"
                      className="border-purple-light focus:border-primary focus:text-primary h-[60px] w-full rounded-[12px] border px-[20px] py-[5px] text-[16px] font-medium text-purple outline-8 placeholder:text-[14px] placeholder:font-light focus:outline-0"
                    />
                    <p className="text-red-500 py-1 text-[14px] font-light">
                      {errors.firstName}
                    </p>
                  </div>
                  <div className="">
                    <label
                      htmlFor="name"
                      className="mb-2 block text-[14px] text-purple"
                    >
                      Last Name *
                    </label>
                    <input
                      name="lastName"
                      id="lastName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                      type="text"
                      placeholder="Your Last Name"
                      className="border-purple-light focus:border-primary focus:text-primary h-[60px] w-full rounded-[12px] border px-[20px] py-[5px] text-[16px] font-medium text-purple outline-8 placeholder:text-[14px] placeholder:font-light focus:outline-0"
                    />
                    <p className="text-red-500 py-1 text-[14px] font-light">
                      {errors.lastName}
                    </p>
                  </div>
                </div>
                <div className="relative mb-10 flex items-center gap-4">
                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="mb-2 block text-[14px] text-purple"
                    >
                      Password *
                    </label>
                    {passwordStrength && (
                      <div
                        className="absolute right-10 top-0 rounded-sm p-1 text-sm font-bold text-white"
                        style={{
                          backgroundColor: getActiveColor(passwordStrength),
                        }}
                      >
                        {passwordStrength}
                      </div>
                    )}
                    <div className="flex">
                      <button className="rounded-bl-[5px] rounded-tl-[5px] bg-[#e9ecef] p-2">
                        <KeyRound size={20} />
                      </button>

                      <input
                        name="password"
                        id="password"
                        onChange={(e) => {
                          handlePasswordChange(e);
                          handleChange(e);
                        }}
                        onFocus={() =>
                          setPasswordState({
                            ...passwordState,
                            showPasswordCriteria: true,
                          })
                        }
                        onBlur={handleBlur}
                        value={values.password}
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Minimum 6 characters"
                        className="border-purple-light focus:border-primary focus:text-primary h-[60px] w-full rounded-br-[12px] rounded-tr-[12px] border px-[20px] py-[5px] text-[16px] font-medium text-purple outline-8 placeholder:text-[14px] placeholder:font-light focus:outline-0"
                      />

                      <button
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="block h-[60px] w-[30px] rounded-br-[12px] rounded-tr-[12px] bg-[#6c757d]"
                      ></button>
                    </div>
                    <p className="text-red-500 py-1 text-[14px] font-light">
                      {errors.password}
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor=""
                      className="mb-2 block text-[14px] text-purple"
                    >
                      Confirm Password *
                    </label>
                    <div className="flex">
                      <button className="rounded-bl-[5px] rounded-tl-[5px] bg-[#e9ecef] p-2">
                        <KeyRound size={20} />
                      </button>
                      <input
                        name="cpassword"
                        id="cpassword"
                        // onChange={handleChange}
                        onChange={(e) => {
                          handleConfirmPasswordChange(
                            values.password,
                            e.target.value,
                          );
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        value={values.cpassword}
                        type={showCPassword ? 'text' : 'password'}
                        placeholder="Re-Type password"
                        className="border-purple-light focus:border-primary focus:text-primary h-[60px] w-full rounded-br-[12px] rounded-tr-[12px] border px-[20px] py-[5px] text-[16px] font-medium text-purple outline-8 placeholder:text-[14px] placeholder:font-light focus:outline-0"
                      />
                      <button
                        onClick={() => setShowCPassword((prev) => !prev)}
                        className="block h-[60px] w-[30px] rounded-br-[12px] rounded-tr-[12px] bg-[#6c757d]"
                      ></button>
                    </div>
                    <p className="text-red-500 py-1 text-[14px] font-light">
                      {errors.cpassword}
                    </p>
                  </div>
                  {progress && (
                    <div className="absolute -bottom-5 left-0 right-0 h-2 overflow-hidden rounded-md">
                      <div
                        className="h-full transition-all duration-500 ease-out"
                        style={{
                          width: progress,
                          backgroundColor: getActiveColor(passwordStrength),
                        }}
                      ></div>
                    </div>
                  )}
                </div>
                <div className="mb-8">
                  <PhoneInput
                    buttonStyle={{
                      padding: '0 2px',
                      color: '#6A49F2',
                    }}
                    inputStyle={{
                      width: '100%',
                      height: '60px',
                      border: '1px solid rgb(225,219,244,1)',
                      fontSize: '16px',
                      fontWeight: '500',
                      color: '#6A49F2',
                    }}
                    inputProps={{
                      name: 'phone',
                      id: 'phone',
                      required: true,
                      min: 11,
                    }}
                    country={'bd'}
                    value={phone}
                    onChange={(phone: any) => setPhone(phone)}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Button type="submit" className="font-medium">
                    {loading ? (
                      <span>
                        <LoadingCircle />
                        Loading...
                      </span>
                    ) : (
                      'Register'
                    )}
                  </Button>
                  <Link href="/">
                    <Button className="bg-[#6c757d] font-medium hover:bg-[#606971]">
                      Cancel
                    </Button>
                  </Link>
                </div>
              </form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterFormForRecruiter;
