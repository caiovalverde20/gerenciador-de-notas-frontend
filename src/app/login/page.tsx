"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/services/authService";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      const data = await login(email, password);
      localStorage.setItem("token", data.token);
      router.push("/notes");
    } catch {
      setError("Credenciais inválidas. Tente novamente.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
          Login
        </h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            label="E-mail"
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" text="Entrar" />
        </form>
        <p className="text-sm text-gray-500 text-center mt-4">
          Não tem uma conta?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}
