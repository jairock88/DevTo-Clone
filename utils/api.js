const BASE_URL = "https://bcknd-chal.onrender.com";
//const BASE_URL = "api-blog.jrck.online";

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

    // Si el login es exitoso, guardamos el token y el ID en el localStorage
    if (data.success && data.data.token && data.data.id) {
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("userId", data.data.id); // Guardar el ID en el localStorage
      return { success: true, token: data.data.token, id: data.data.id };
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
        profilePic: userData.profilePic,
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

    const postsWithUserData = await Promise.all(
      posts.map(async (post) => {
        const user = await getUser(post.user);
        return {
          id: post._id,
          title: post.title,
          image: post.image,
          body: post.body,
          user: user,
          hashtags: post.hashtags,
          createdAt: post.createdAt,
          updatedAt: post.updatedAt,
        };
      })
    );

    return postsWithUserData;
  } else {
    throw new Error("Failed to fetch posts");
  }
}

export async function createPost(title, image, body, tags, token) {
  const response = await fetch(`${BASE_URL}/post/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ title, image, body, tags }),
  });
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

    // Log the data to the console
    console.log("User data fetched:", data);

    return data.data.user;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}

export async function getUserCount() {
  try {
    let response = await fetch(`${BASE_URL}/users/count`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Incluye el token de autenticación si es necesario
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching user count: ${response.statusText}`);
    }

    let data = await response.json();

    // Loguea los datos en la consola
    console.log("User count fetched:", data);

    // Devuelve el número total de usuarios
    return data.data.count;
  } catch (error) {
    // Maneja y muestra el error en la consola
    console.error("Error fetching user count:", error);
    return null;
  }
}

export async function getPostById(id) {
  try {
    const response = await fetch(`${BASE_URL}/post/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch post");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
}
