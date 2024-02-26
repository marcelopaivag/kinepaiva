import PostPage from '../page'

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()
  return data
}

async function Page({params}) {

  const post = await loadPost(params.id)

  return (
    <div>
      <h1>{post.id}. {post.title}</h1>
      <p>{post.body}</p>

      <hr />

      <h3>Otras Publicaciones</h3>
      <PostPage />
    </div>
  )
}

export default Page