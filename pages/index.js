import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-[url('/camera.jpg')] bg-no-repeat bg-cover">
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
  );
}
