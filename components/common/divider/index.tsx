

interface Divider {
  text: string
}



const Divider = ({ text }: Divider) => {
  return (
    <div className='relative my-8'>
      <div className='absolute inset-0 flex items-center'>
        <div className='w-full border-t border-text6 border-strong'></div>
      </div>
      <div className='relative flex justify-center text-sm'>
        <span className='px-2 text-sm bg-studio text-text6 font-500 bg-themeDark'>
          {text}
        </span>
      </div>
    </div>)
}

export default Divider