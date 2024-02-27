import PostPage from '../page'

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()
  return data
}

async function Page({ params }) {

  const post = await loadPost(params.id)

  return (
    <div className="container mx-auto px-4 py-8"> {/* General container with margins and padding */}
      <div> {/* Center the content within the container */}
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1> {/* Title with large size and margin */}
        <p className="mb-8">{post.body}</p> {/* Body text with gray color and margin */}

        <hr className="my-8" /> {/* Horizontal line with margin */}

        <h3 className="text-2xl font-semibold mb-4">Otras Publicaciones</h3> {/* Subheading for other posts */}
        <PostPage /> {/* Render the PostPage component */}
      </div>
    </div>)
}

export default Page