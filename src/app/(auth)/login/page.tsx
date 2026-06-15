import { LoginForm } from "@/features/auth/components/LoginForm";
import { APP_NAME } from "@/constants";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/40">
      <div className="w-full max-w-md space-y-6 p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">{APP_NAME}</h1>
          <p className="text-muted-foreground mt-2">
            Plataforma de gestión veterinaria
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
