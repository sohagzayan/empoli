import { CiMobile1 } from 'react-icons/ci';
import { FaBirthdayCake } from 'react-icons/fa';
import { GrLocationPin } from 'react-icons/gr';
import { RiMailSendLine, RiRemoteControlLine } from 'react-icons/ri';

const AllPersonalInformation = () => {
  return (
    <div>
      <div className="custom-container mt-10 rounded-lg bg-[rgba(255,255,255,0.06)] py-6">
        <h2 className="mb-2 rounded-md p-2 px-10 text-2xl font-600 text-white">
          All Personal Information
        </h2>
        <div className="mt-4 px-10">
          <div className="grid grid-cols-3 gap-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-themeDark text-white">
                <RiMailSendLine />
              </div>
              <div>
                <h3 className="font-600 text-white">Jerome.bell@example.com</h3>
                <p className="font-500 text-text6">Mail Address</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-themeDark text-white">
                <CiMobile1 />
              </div>
              <div>
                <h3 className="font-600 text-white">Jerome.bell@example.com</h3>
                <p className="font-500 text-text6">Mail Address</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-themeDark text-white">
                <FaBirthdayCake />
              </div>
              <div>
                <h3 className="font-600 text-white">03 September 20000</h3>
                <p className="font-500 text-text6">18 Years old</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-themeDark text-white">
                <FaBirthdayCake />
              </div>
              <div>
                <h3 className="font-600 text-white">$24.000</h3>
                <p className="font-500 text-text6">Salary Expectation</p>
              </div>
            </div>
          </div>
          <hr className="mt-4 border-text1 py-2" />
          <div className="">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-themeDark text-white">
                <GrLocationPin />
              </div>
              <div>
                <h3 className="font-600 text-white">
                  Istanbul, Izmir, Ankara, Turkey, US, Europe
                </h3>
                <p className="font-500 text-text6">Location</p>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-themeDark text-white">
                <RiRemoteControlLine />
              </div>
              <div>
                <h3 className="font-600 text-white">
                  Remote, Fulltime, Part-Time, InternShip, Freelance
                </h3>
                <p className="font-500 text-text6">Work Type</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPersonalInformation;
