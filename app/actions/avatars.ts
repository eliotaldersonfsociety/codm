export async function getRandomAvatars(count: number): Promise<string[]> {
  const avatars: string[] = [];
  for (let i = 0; i < count; i++) {
    // Usar pravatar.cc para generar avatares aleatorios sin API externa directa
    const randomId = Math.floor(Math.random() * 70) + 1;
    avatars.push(`https://i.pravatar.cc/150?img=${randomId}`);
  }
  return avatars;
}