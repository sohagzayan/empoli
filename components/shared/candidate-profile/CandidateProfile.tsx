import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { IoMdCheckmark, IoMdCloseCircleOutline } from 'react-icons/io';
import { IoEyeOutline, IoLocationOutline } from 'react-icons/io5';
import { LiaMoneyBillWaveSolid } from 'react-icons/lia';
import { RiDeleteBinLine } from 'react-icons/ri';
import GetTooltip from '../get-tooltip/GetTooltip';

const CandidateProfile = () => {
  return (
    <Card className="px-2 py-4">
      <CardContent className="mb-0 grid grid-cols-12 pb-0">
        <div className="col-span-3">
          <Image
            src="/assets/images/candidate-1.webp"
            width={80}
            height={80}
            alt="candidate"
          />
        </div>
        <div className="col-span-9">
          <h3 className="text-blue mb-1 text-[18px] font-medium">
            Darlene Robertson
          </h3>
          <div className="mb-2 flex items-center gap-2 text-[14px]">
            <span className="text-primary">Ui Designer</span>
            <span className="flex items-center">
              <IoLocationOutline /> London, UK
            </span>
            <span className="flex items-center">
              <LiaMoneyBillWaveSolid className="mr-1" /> $44 / hour
            </span>
          </div>
          <ul className="mb-4 flex items-center gap-4 text-[12px]">
            <li className="bg-primary-50 rounded-lg px-4 py-1">App</li>
            <li className="bg-primary-50 rounded-lg px-4 py-1">Design</li>
            <li className="bg-primary-50 rounded-lg px-4 py-1">Digital</li>
          </ul>
          <ul className="flex items-center gap-3">
            <GetTooltip tooltipContent="View Application">
              <li className="bg-primary-50 text-primary-500 hover:bg-primary flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-lg text-[14px] transition-all duration-200 hover:text-white">
                <IoEyeOutline />
              </li>
            </GetTooltip>
            <GetTooltip tooltipContent="Approve Application">
              <li className="bg-primary-50 text-primary-500 hover:bg-primary flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-lg text-[14px] transition-all duration-200 hover:text-white">
                <IoMdCheckmark />
              </li>
            </GetTooltip>
            <GetTooltip tooltipContent="Reject Application">
              <li className="bg-primary-50 text-primary-500 hover:bg-primary flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-lg text-[14px] transition-all duration-200 hover:text-white">
                <IoMdCloseCircleOutline />
              </li>
            </GetTooltip>
            <GetTooltip tooltipContent="Delete Application">
              <li className="bg-primary-50 text-primary-500 hover:bg-primary flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-lg text-[14px] transition-all duration-200 hover:text-white">
                <RiDeleteBinLine />
              </li>
            </GetTooltip>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default CandidateProfile;
