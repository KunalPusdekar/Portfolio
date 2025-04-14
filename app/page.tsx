"use client"; // This ensures the component is rendered on the client side

import dynamic from "next/dynamic";

const Home = dynamic(() => import("./components/Home"), { ssr: false });

export default function Page() {
  return <Home />;
}
