export default function IndexPage(props) {
  return (
    <div variant="container" textAlign="center" py="20">
      <h1 variant="heading.h1">
        Welcome to <span color="primary">Reflexjs</span>
      </h1>
      <p fontSize="xl" my="4">
        Get started by editing <code variant="text.code">pages/index.jsx</code>
      </p>
      <a href="https://reflexjs.org/docs" variant="button.primary">
        Read the docs
      </a>
    </div>
  )
}

export async function getServerSideProps() {
  const fetchMovies = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/genres`)
  const movies = await fetchMovies.json()

  return {
      props: {
        movies
      }
  }
}
