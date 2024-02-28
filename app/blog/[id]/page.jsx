import PostPage from "../../../components/PostPage"

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()
  return data
}

async function Page({ params }) {

  const post = await loadPost(params.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <img src={post.image} alt={post.title} />
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1> 
        <p className="mb-8">{post.body}</p>

        <hr className="my-8" /> 

        <h3 className="text-2xl font-semibold mb-4">Otras Publicaciones</h3>
        <PostPage />
      </div>
    </div>
    )
}

export default Page