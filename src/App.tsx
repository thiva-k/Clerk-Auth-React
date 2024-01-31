import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react"
 
function App() {
 
  return (
    <div>
      <SignedOut>
        <SignInButton />
        <p>Currently Signed Out</p>
      </SignedOut>
      <SignedIn>
        <SignOutButton />
        <p>Currently Signed in</p>
      </SignedIn>
    </div>
  )
}
 
export default App