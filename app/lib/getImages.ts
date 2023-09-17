export async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/images`);
  const data = await res.json();
  return data;
}
