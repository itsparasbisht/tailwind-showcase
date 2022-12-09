import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-[url('/camera.jpg')] bg-no-repeat bg-cover">
      <nav className="bg-red-300 w-full h-20">
        <img src="/logo.png" alt="" />
        <div>
          <span></span>
        </div>
      </nav>
    </div>
  );
}
