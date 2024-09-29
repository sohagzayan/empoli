const SocialMediaLinkGroup = () => {
  return (
    <div className="py-2">
      <ul className="flex items-center gap-2">
        <li className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-transparent bg-[rgba(255,255,255,0.1)] text-white">
          <i className="ri-facebook-line cursor-pointer text-[20px]"></i>
        </li>
        <li className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-transparent bg-[rgba(255,255,255,0.1)] text-white">
          <i className="ri-twitter-fill cursor-pointer text-[20px]"></i>
        </li>
        <li className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-transparent bg-[rgba(255,255,255,0.1)] text-white">
          <i className="ri-linkedin-line cursor-pointer text-[20px]"></i>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaLinkGroup;
