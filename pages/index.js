import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen overflow-scroll snap-proximity">
      <div className="w-screen h-screen max-w-[1500px] mx-auto bg-[url('/camera.jpg')] bg-no-repeat bg-cover snap-start">
        <nav className="w-ful p-4 flex justify-between items-center">
          <Image src="/logo.png" alt="logo" width={"120"} height={"20"} />
          <div className="text-[0.9rem] w-[50%] flex justify-around font-semibold cursor-pointer">
            <span>EOS Rebel</span>
            <span>EOS 6D</span>
            <span>EOS 5D</span>
            <span>EOS-1D X</span>
            <span>EOS R7</span>
            <span>EOS M50</span>
          </div>
          <div className="text-[0.9rem] w-[18%] flex justify-around font-semibold cursor-pointer">
            <span className="nav-btn-effect">Shop</span>
            <span className="nav-btn-effect">Account</span>
            <span className="nav-btn-effect">Menu</span>
          </div>
        </nav>
      </div>
      <div className="w-screen h-screen bg-red-300 snap-start"></div>
    </main>
  );
}
