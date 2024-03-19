

const Loader = ({notFullscreen = false, title}:{notFullscreen?:boolean, title?:string}) => {
  return (
    <div className={notFullscreen? ' bg-transparent flex justify-center w-full h-full items-center' :'fixed top-0 w-screen h-screen flex justify-center items-center z-40 border-2 left-0'}>
        <div className="flex flex-col bg-transparent">
        <img
              src="/assets/loading.svg"
              className="w-[80px] h-[80px] ml-2  my-auto md:my-0 bg-transparent"
              alt="Logo"
            />
          <h1 className="font-medium text-[16px] bg-transparent">{title}</h1>
          </div>
    </div>
  )
}

export default Loader