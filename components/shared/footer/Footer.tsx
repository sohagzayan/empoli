import {
  Logo,
  SocialMediaLinkGroup,
  SubscriptionForm,
} from '@/components/common';
import Copyrights from '../copyrights/Copyrights';

const Footer = () => {
  return (
    <footer className="mb-14 bg-themeDark md:mb-0 lg:mb-0">
      <div className="pb-[20px] pt-[100px] lg:pt-[150px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
            {/* Logo and Social Media */}
            <div className="col-span-4 flex flex-col">
              <Logo />
              <div className="flex flex-col gap-3 py-1">
                <p className="text-text6">
                  JobJoy is a shared platform for career opportunities,
                  seamlessly connecting multiple job boards to provide users
                  with a streamlined job search experience.
                </p>
              </div>
              <SocialMediaLinkGroup />
            </div>

            {/* Useful Links */}
            <div className="col-span-2 flex md:col-span-1 md:justify-end lg:col-span-2">
              <div>
                <h2 className="pb-[20px] pt-[10px] text-[20px] font-semibold text-white lg:pb-[40px]">
                  Useful Links
                </h2>
                <ul className="space-y-2 text-text6">
                  <li>Home</li>
                  <li>About us</li>
                  <li>Service</li>
                  <li>Blog</li>
                  <li>Contact us</li>
                </ul>
              </div>
            </div>

            {/* Help & Support */}
            <div className="col-span-2 flex md:col-span-1 md:justify-end lg:col-span-2">
              <div>
                <h2 className="pb-[20px] pt-[10px] text-[20px] font-semibold text-white lg:pb-[40px]">
                  Help & Support
                </h2>
                <ul className="space-y-2 text-text6">
                  <li>FAQs</li>
                  <li>Support</li>
                  <li>How it works</li>
                  <li>Terms & conditions</li>
                  <li>Privacy policy</li>
                </ul>
              </div>
            </div>

            {/* Subscribe */}
            <div className="col-span-4 flex md:justify-end">
              <div>
                <h2 className="pb-[20px] pt-[10px] text-[20px] font-semibold text-white lg:pb-[40px]">
                  Subscribe
                </h2>
                <div className="">
                  <p className="mb-3 text-wrap font-400 text-text6">
                    Signup for our newsletter to get the latest news <br /> in
                    your inbox.
                  </p>
                  <SubscriptionForm />
                  <p className="mb-3 mt-3 text-wrap font-400 text-text6">
                    Your email is safe with us. We don{"'"}t spam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyrights />
    </footer>
  );
};

export default Footer;
