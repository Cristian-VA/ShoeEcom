
const HomeProductSlider = ({children}:{children:any}) => {
  

  return (
    <div className="w-full max-w-screen flex flex-col my-6  bg-gray-50 ">
      <div className="overflow-x-scroll bg-gray-50  flex w-full custom-scrollbar1 gap-4 whitespace-nowrap pb-4 items-center xl:justify-around">
        {children}
      </div>
    </div>
  );
};

export default HomeProductSlider;