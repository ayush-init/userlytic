import type { User, UsersResponse } from "../types/user";

const API_URL = "https://dummyjson.com";

export async function getUsers(
  limit = 12,
  skip = 0
): Promise<UsersResponse> {
  const response = await fetch(
    `${API_URL}/users?limit=${limit}&skip=${skip}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}

export async function getUser(id: string): Promise<User> {
  const response = await fetch(`${API_URL}/users/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  return response.json();
}

