'use client';
import { authClient } from "@/lib/auth-client";


export default  function DashboardPage() {
  const { 
    data: session, 
    isPending, 
    error, 
    refetch 
} = authClient.useSession() 

  if(isPending) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div>Error: {error.message}</div>
  }
  if(!session) {
    return <div>Not authenticated</div>
  }

    return <h1>Welcome {session?.user?.name || "Guest"}</h1>
}