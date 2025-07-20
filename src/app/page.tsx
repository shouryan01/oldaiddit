import SignUp from "@/components/auth/sign-up";
import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">Welcome to aiddit</h1>
        <p className="mt-4 text-gray-600">Your AI-powered community platform</p>
      </main>
    </div>
  );
}
