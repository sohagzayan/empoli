import ImpactfulNumbers from './ImpactfulNumbers';

const OurMission = () => {
  return (
    <div className="mx-6 w-[95%] md:w-[600px] lg:mx-auto lg:w-[700px]">
      <div className="my-10 flex justify-center text-wrap">
        <div>
          <h3 className="mb-2 font-500 text-theme1">Our Mission</h3>
          <p className="font-500 text-white">
            At JobJoy, we{'’'}re passionate about bringing joy to your job
            search experience. Our platform offers unique career opportunities
            that are tailored just for you—transparent, accessible, and
            empowering. Like a valuable asset, you have full control over your
            career path—explore, apply, and thrive with ease, all while finding
            opportunities that truly match your potential.
          </p>
        </div>
      </div>
      <div className="relative">
        <span
          className="absolute left-[70%] top-0 h-[250px] w-[1px] bg-white"
          style={{
            background:
              'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.08) 51.04%, rgba(255, 255, 255, 0) 100%)',
          }}
        ></span>
        <span
          className="absolute left-[30%] top-0 h-[200px] w-[1px] bg-white"
          style={{
            background:
              'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.08) 51.04%, rgba(255, 255, 255, 0) 100%)',
          }}
        ></span>

        <span
          className="absolute left-0 top-[34%] h-[1px] w-full bg-white"
          style={{
            background:
              'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.08) 51.04%, rgba(255, 255, 255, 0) 100%)',
          }}
        ></span>

        <div className="flex w-full justify-between">
          <div className="grid w-full grid-cols-3 gap-10">
            <ImpactfulNumbers
              image="/assets/images/mission/counter-1.png"
              count={'930'}
              name="Since Launching"
              className="mb-[30px] flex items-start gap-2 pb-[30px]"
            />
            <ImpactfulNumbers
              image="/assets/images/mission/counter-2.png"
              count={'0M+'}
              name="Total User"
              className="mb-[30px] flex items-start justify-center gap-2 pb-[30px]"
            />
            <ImpactfulNumbers
              image="/assets/images/mission/counter-3.png"
              count={'24+'}
              name="Total Employees"
              className="mb-[30px] flex items-start !justify-end gap-2 pb-[30px]"
            />
            <ImpactfulNumbers
              image="/assets/images/mission/counter-4.png"
              count={'0M+'}
              name="Total Collections"
              className="mb-[30px] flex items-start gap-2 pb-[30px]"
            />
            <ImpactfulNumbers
              image="/assets/images/mission/counter-5.png"
              count={'0k+'}
              name="NFT Created"
              className="mb-[30px] flex items-start justify-center gap-2 pb-[30px]"
            />
            <ImpactfulNumbers
              image="/assets/images/mission/counter-6.png"
              count={'$0B+'}
              name="Trading Volume"
              className="mb-[30px] flex items-start justify-end gap-2 pb-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
