import { db, User, Todo, Category } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  try {
    // Inserta datos de Usuario
    await db.insert(User).values([
      { id: 'u1', email: "hola@gmail.com", username: "hola" },
      { id: 'u2', email: "mina@gmail.com", username: "mina" },
    ]);

    // Inserta datos de Categoría (IMPORTANTE: inserta antes de Todo)
    await db.insert(Category).values([
      { id: 'c1', label: "Software" },
      { id: 'c2', label: "Marketing" },
    ]);

    // Inserta datos de Tarea (IMPORTANTE: la referencia a category_id debe existir)
    await db.insert(Todo).values([
      {
        id: 't1',
        title: "Hola",
        description: "Me gusta el webito frito aña",
        user_id: 'u1',
        category_id: 'c1',
      },
      {
        id: 't2',
        title: "Mina",
        description: "Que dice la people amante del arroz chino",
        user_id: 'u2',
        category_id: 'c2',
      },
    ]);
    console.log("Inserción exitosa!");
  } catch (error) {
    console.error("Error al insertar datos:", error);
  }
}