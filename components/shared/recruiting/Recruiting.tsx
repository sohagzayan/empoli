import { Button } from '@/components/ui/button';

const Recruiting = () => {
  return (
    <div className="container lg:px-16 xl:px-20">
      <div className="rounded-[15px] bg-white">
        <div className="relative">
          <div className="p-[60px]">
            <h3 className="text-primary pb-1 text-[20px] font-bold">
              Recruiting?
            </h3>
            <p className="text-[14px] font-light text-purple">
              Advertise your jobs to millions of monthly users and <br /> search
              15.8 million CVs in our database.
            </p>
            <Button className="mt-6">Start Recruiting Now</Button>
          </div>
          <div className="bg-recruiting-banner absolute right-0 top-0 h-full w-[150px] bg-no-repeat lg:w-[360px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Recruiting;
