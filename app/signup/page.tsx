import { SignupForm } from "@/components/signup-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { NavBar } from "@/components/ui/tubelight-navbar";

export default function SignUp() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-4 items-center justify-center p-8 relative">
      <div className="absolute top-0 z-[-2] h-screen w-screen dark:bg-black bg-neutral-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <h1 className="font-semibold text-3xl text-center">
        Create your account
      </h1>
      <NavBar />

      <Card className="max-w-xl w-full ">
        <CardHeader />
        <CardContent>
          <SignupForm />
        </CardContent>
      </Card>
    </div>
  );
}
