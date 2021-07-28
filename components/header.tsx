type Props = {
  hero: React.ReactNode;
  description: React.ReactNode;
};

export default function Header({ hero, description }: Props) {
  return (
    <>
      <h1>{hero}</h1>
      <p>{description}</p>
    </>
  );
}
