async function handler(req) {
  const createUserRoute = new URLPattern({ pathname: "/user" });
  const url = new URL(req.url);

  if (createUserRoute.test(url) && req.method === "POST") {
    const file = await Deno.readTextFile("users.json");
    let users = JSON.parse(file);
    // create a new user
    const userBody = await req.json();
    // validate the user here
    const id = Math.floor(Math.random() * 1000);
    const newUser = { id, ...userBody };
    users = [...users, newUser];
    await Deno.writeTextFile("users.json", JSON.stringify(users));
    return new Response(JSON.stringify(newUser), { status: 201 });
  }

  return new Response(null, { status: 404 });
}

Deno.serve(handler);