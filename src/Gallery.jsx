export function Profile() {
  return (
    <img
      src='https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Einstein_tongue.jpg/220px-Einstein_tongue.jpg'
      alt='El viejo stain'
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Gallery Scientist</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
