import api from "@/services/api";

export async function login(email: string, password: string) {
  const res = await api.post("/auth/login", { email, password });
  return res.data;
}

export const registerUser = async (data: { name: string; email: string; password: string; }) => {
  try {
    await api.post("/auth/signup", data);
    return { success: true, message: "Cadastro realizado com sucesso!" };
  } catch (error: unknown) {
    return { success: false, message: "Erro ao cadastrar. Verifique os dados." };
  }
};