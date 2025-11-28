export async function getRandomAvatars(count: number): Promise<
  { small: string; large: string }[]
> {
  const avatars = [];

  for (let i = 0; i < count; i++) {
    const randomId = Math.floor(Math.random() * 70) + 1;

    avatars.push({
      small: `https://i.pravatar.cc/40?img=${randomId}`,  // Desktop
      large: `https://i.pravatar.cc/70?img=${randomId}`,  // Mobile
    });
  }

  return avatars;
}
