import { Mail, Lock } from "lucide-react";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";
import AuthCard from "../components/ui/AuthCard";

function Login() {
  return (
    <AuthCard>
      <h2 className="font-serif text-2xl text-dark-blue mb-6 text-center">
        Sign In
      </h2>

      <div className="space-y-4">
        <InputField
          label="Email"
          placeholder="you@example.com"
          icon={Mail}
        />

        <InputField
          label="Password"
          type="password"
          placeholder="••••••••"
          icon={Lock}
        />

        <Button variant="primary">
          Sign In
        </Button>
      </div>
    </AuthCard>
  );
}

export default Login;
