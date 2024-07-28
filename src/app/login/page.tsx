
import Link from 'next/link';

import Loginform from '../../comp/loginform';
import { auth, signIn } from '@/auth';
import { redirect } from 'next/navigation';




const Page = async () => {
  const session = await auth();
  if(session?.user) redirect("/"); 
  return (
      <div className="formcover">
         <h2>Login</h2>
         <Loginform />
        <p>don't have an account <Link href={'/signup'}>signup</Link></p>
      </div>
  )
}

export default Page