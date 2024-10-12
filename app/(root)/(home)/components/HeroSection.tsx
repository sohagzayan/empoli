import Marquee from '@/components/shared/Marquee/Marquee';
import DynamicTitle from './DynamicTitle';
import QuickSearch from './QuickSearch';

const HeroSection = () => {
  return (
    <div className="relative z-0 overflow-x-clip lg:px-16 xl:px-20">
      <div className="pointer-events-none absolute right-0 top-14 -z-20 h-full w-full">
        <img
          src="/assets/images/hero/slider-shape.png"
          alt=""
          style={{ objectFit: 'cover' }}
          className="w-full scale-x-125"
        />
      </div>
      <div className="pointer-events-none absolute -right-32 -top-10 -z-20 h-full w-[1000px] opacity-40">
        <img
          src="/assets/images/hero/slider-glow.png"
          alt=""
          style={{ objectFit: 'cover' }}
          className="w-full scale-x-125"
        />
      </div>
      <div className="pointer-events-none absolute -top-0 left-0 -z-20 h-full w-full opacity-90">
        <img
          src="/assets/images/hero/slider-line-glow.png"
          alt=""
          style={{ objectFit: 'cover' }}
          className="w-full scale-x-125"
        />
      </div>

      <div className="mx-auto justify-center text-center lg:col-span-6 lg:flex lg:items-center">
        <div className="relative z-10 mx-auto w-[900px] px-6 pt-[90px] lg:px-8 lg:pt-[120px]">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <div className="mb-5">
              <h2 className="rounded-full border border-[rgba(255,255,255,0.08)] px-6 py-1 text-[17px] font-400 text-text6">
                {' '}
                <strong className="text-text5">Welcome</strong> to a new era of{' '}
                <strong className="text-text5">innovation</strong> with...
              </h2>
            </div>
            <DynamicTitle />
            <p className="text-[16px] font-400 text-text6">
              Unlock endless opportunities and take the next step in your career
              journey. Whether you&rsquo;re chasing your passion or exploring
              new paths, we&rsquo;re here to help you find the perfect fit. Your
              dream job is just a click away—let&rsquo;s make it happen
              together!
            </p>
          </div>
        </div>
      </div>
      <QuickSearch />
      <div className="my-10">
        <Marquee />
      </div>
    </div>
  );
};

export default HeroSection;
