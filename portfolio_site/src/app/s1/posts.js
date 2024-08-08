
const posts = [
  {
    title: 'Attendance App',
    id: 1,
    images: [
      './imgs/att_app/singo.png',
      './imgs/att_app/Screenshot_1712457249.png',
    ],
    description: 'An application that tracks student attendance and authorizes it through geofencing like DoorDash.',
    projectUrl: 'https://github.com/ivan-rh22/attendance-app',
  },
  {
    title: 'Calorie Counter App',
    id: 2,
    images: [
      './imgs/calorie_counter/cca.png',
    ],
    description: 'An application that tracks food intake through calorie and nutrition.',
    projectUrl: 'https://github.com/JuanTime2Late/Calorie_Counter',
  },
]

const Posts = () => {
  return(
    <div className="container mx-auto p-4 ">
      <div className="max-w-lg mx-auto space-y-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-800 text-white p-4  rounded shadow">
            <p className="mb-4 text-center text-2xl">{post.title}</p>
            <div className="grid grid-cols-2 gap-2">
              {post.images.slice(0, 2).map((image, index) => (
                <img key={index} src={image} alt={`Post ${post.id} Image ${index + 1}`} className="rounded" />
              ))}
            </div>
            <p className="mt-4 px-2 py-1 border-dotted border-gray-700 shadow-2xl border rounded-lg">{post.description}</p>
            <a href={post.projectUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-black shadow-xl hover:bg-gray-400 hover:text-black text-white px-4 py-2 rounded">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;