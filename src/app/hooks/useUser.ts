"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/services/api";

interface User {
  _id: string;
  name: string;
  email: string;
}

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await api.get("/user");
        setUser(res.data);
      } catch {
        router.push("/login");
      }
    }
    fetchUser();
  }, [router]);
  return user;
}