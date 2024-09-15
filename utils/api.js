const BASE_URL = "https://bcknd-chal.onrender.com";

export async function login(email, password) {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    // Verificamos si la respuesta es correcta
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }

    const data = await response.json();

    // Si el login es exitoso, guardamos el token en el localStorage
    if (data.success && data.data.token) {
      localStorage.setItem("token", data.data.token);
      return { success: true, token: data.data.token };
    } else {
      throw new Error("Invalid response structure");
    }
  } catch (error) {
    console.error("Error during login:", error);
    return { success: false, message: error.message };
  }
}

export async function signupUser(userData) {
  try {
    const response = await fetch(`${BASE_URL}/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userData.name,
        username: userData.username,
        email: userData.email,
        password: userData.password,
      }),
    });

    // Verifica si la respuesta es exitosa
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Signup failed");
    }

    const data = await response.json();

    // Retorna los datos del usuario creado si todo es exitoso
    if (data.success && data.data.user) {
      return { success: true, user: data.data.user };
    } else {
      throw new Error("Invalid response structure");
    }
  } catch (error) {
    console.error("Error during signup:", error);
    return { success: false, message: error.message };
  }
}

export async function getAllPosts() {
  let response = await fetch(`${BASE_URL}/post`);
  let data = await response.json();

  if (data.success) {
    let posts = data.data.posts;
    return posts.map((post) => ({
      id: post._id,
      title: post.title,
      image: post.image,
      body: post.body,
      user: post.user,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    }));
  } else {
    throw new Error("Failed to fetch posts");
  }
}

export async function createPost(postObject) {
  const token = localStorage.getItem("token"); // Obtén el token del local storage

  const response = await fetch(`${BASE_URL}/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Incluye el token en los encabezados
    },
    body: JSON.stringify(postObject),
  });

  if (!response.ok) {
    throw new Error("Error creating post");
  }

  const data = await response.json();
  return data;
}

export async function getUser(userId) {
  try {
    let response = await fetch(`${BASE_URL}/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching user: ${response.statusText}`);
    }

    let data = await response.json();

    return data.data.user;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}
