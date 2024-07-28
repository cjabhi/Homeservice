import { auth , signOut } from "@/auth";
import Header from "@/comp/header";
import Searchform from "@/comp/searchform";
import Image from "next/image";
import { redirect } from "next/navigation";
import ShowEmployee from "@/comp/showEmployee";

export default async function Home() {
  let data = "home page"
  const session = await auth();
  if(!session?.user) redirect("/login");
  
  return (
    <div>
    <Header />
    <Searchform />
    {/* <ShowEmployee /> */}
    </div>
  );
}
