import SignupForm from "../components/signup/Signupform";
import SignupHero from "../components/signup/Signuphero";

export default function SignupScreen() {
  return (
    <>
      <div className="container py-16 grid items-center grid-cols-2 gap-16">
        <SignupHero />
        <SignupForm />
      </div>
    </>
  );
}
