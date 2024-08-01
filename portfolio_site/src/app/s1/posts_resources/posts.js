
const posts = [
  {
    id: 1,
    images: [
      './imgs/att_app/Screenshot_1712457249.png',
    ],
    description: 'Application description here',
    projectUrl: 'https://github.com/JuanTime2Late/Portfolio_Site',
  },
]

const Posts = () => {
  return(
    <div className="container mx-auto p-4">
      <div className="max-w-lg mx-auto space-y-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded shadow">
            <div className="grid grid-cols-2 gap-2">
              {post.images.slice(0, 1).map((image, index) => (
                <img key={index} src={image} alt={`Post ${post.id} Image ${index + 1}`} className="rounded" />
              ))}
            </div>
            <p className="mt-4">{post.description}</p>
            <a href={post.projectUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;