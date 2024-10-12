import { InputField } from '@/components/common';
import { BreadcrumbPath } from '@/components/common/BreadcrumbPath/BreadcrumbPath';
import { Label } from '@/components/ui/label';

const PasswordWrapper = () => {
  return (
    <div
      style={{
        borderColor: 'rgba(255, 255, 255, 0.14)',
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        backdropFilter: 'blur(30px)',
        boxShadow: '0px 20px 50px rgba(1, 5, 43, 0.2)',
      }}
      className="border text-white"
    >
      <div>
        <div
          style={{
            borderColor: 'rgba(255, 255, 255, 0.14)',
          }}
          className="mb-6 border-b px-4 py-4"
        >
          <BreadcrumbPath />
        </div>
        <div className="">
          <form action="" className="">
            <div className="mx-auto w-[80%]">
              <div className="mb-6 flex items-center gap-3">
                <Label className="text-md w-1/4">Current password</Label>{' '}
                {/* Set a fixed width */}
                <InputField
                  placeholder=""
                  className="w-3/4 rounded-lg py-2"
                />{' '}
                {/* Adjust width */}
              </div>
              <div className="mb-2 flex items-center gap-3">
                <Label className="text-md w-1/4">New password</Label>{' '}
                {/* Set a fixed width */}
                <InputField
                  type="email"
                  placeholder=""
                  className="w-3/4 rounded-lg py-2"
                />
              </div>
              <div className="mb-2 flex items-center gap-3">
                <Label className="text-md w-1/4">Confirm new password</Label>{' '}
                {/* Set a fixed width */}
                <InputField
                  type="email"
                  placeholder=""
                  className="w-3/4 rounded-lg py-2"
                />
              </div>
            </div>

            <div className="mx-auto w-[80%]">
              <div className="flex items-center justify-center">
                <button className="mb-2 text-sm text-text2 hover:underline">
                  Forgot Password?
                </button>
                {/* <button className="text-sm">
                  Send Password Reset (sohag.zayan@gmail.com)
                </button> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordWrapper;
