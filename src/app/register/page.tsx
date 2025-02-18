"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/services/authService";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (form.password !== form.confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    const response = await registerUser({ name: form.name, email: form.email, password: form.password });

    if (response.success) {
      setSuccess(response.message);
      setTimeout(() => router.push("/login"), 2000);
    } else {
      setError(response.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">Cadastro</h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        {success && <p className="text-green-500 text-sm text-center">{success}</p>}

        <form onSubmit={handleRegister} className="space-y-4">
          <Input type="text" label="Nome" value={form.name} onChange={handleChange} name="name" />
          <Input type="email" label="E-mail" value={form.email} onChange={handleChange} name="email" />
          <Input type="password" label="Senha" value={form.password} onChange={handleChange} name="password" />
          <Input type="password" label="Confirmar Senha" value={form.confirmPassword} onChange={handleChange} name="confirmPassword" />
          <Button type="submit" text="Cadastrar" />
        </form>

        <p className="text-sm text-gray-500 text-center mt-4">
          Já tem uma conta? <a href="/login" className="text-blue-500 hover:underline">Faça login</a>
        </p>
      </div>
    </div>
  );
}
