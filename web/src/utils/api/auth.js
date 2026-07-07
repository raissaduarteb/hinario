export async function login(senha) {
  const res = await fetch("https://hinario-api.onrender.com/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ senha }),
  });

  if (!res.ok) {
    const err = new Error("Senha inválida.");
    err.status = res.status;
    throw err;
  }

  return res.json();
}
