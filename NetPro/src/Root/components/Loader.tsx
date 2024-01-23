

const Loader = () => {
  return (
    <div className='fixed top-0 w-screen h-screen flex justify-center items-center z-40'>
        <img
              src="/assets/loading.svg"
              className="w-[80px] h-[80px] ml-2  my-auto md:my-0"
              alt="Logo"
            />
    </div>
  )
}

export default Loader