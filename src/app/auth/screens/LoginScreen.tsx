import LoginForm from "../components/login/LoginForm";
import LoginHero from "../components/login/LoginHero";

export default function LoginScreen() {
  return (
    <>
      <div className="container py-16 grid items-center grid-cols-2 gap-16">
        <LoginHero />
        <LoginForm />
      </div>
    </>
  );
}
