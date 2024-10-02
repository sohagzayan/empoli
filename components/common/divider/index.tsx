interface Divider {
  text: string;
}

const Divider = ({ text }: Divider) => {
  return (
    <div className="relative my-8">
      <div className="absolute inset-0 flex items-center">
        <div className="border-strong w-full border-t border-text6"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="bg-studio bg-themeDark px-2 text-sm font-500 text-text6">
          {text}
        </span>
      </div>
    </div>
  );
};

export default Divider;
