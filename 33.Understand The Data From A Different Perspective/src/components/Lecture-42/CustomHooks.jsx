import React from "react";
import useCounter from "./hooks/useCounter";
import useFetchData from './hooks/useFetchData';

const CountController = (props) => {
  const { count, handleInc, handleDec } = useCounter({ ...props });
  return (
    <div>
      <button onClick={handleInc}>+</button>
      <span>{count}</span>
      <button onClick={handleDec}>-</button>
    </div>
  );
};

const CustomHooks = () => {
    const user = useFetchData('https://jsonplaceholder.typicode.com/users', (data) => data.map(item => ({id: item.id, name: item.name})));
    const posts = useFetchData('https://jsonplaceholder.typicode.com/posts', (data) => data.map(item => ({id: item.id, title: item.title})).slice(0, 10));
    const comments = useFetchData('https://jsonplaceholder.typicode.com/comments', (data) => data.map(item => ({id: item.id, name: item.name})).slice(0, 10));

  return (
    <div>
      <div>
        <h1>CustomHooks Counter</h1>
        <CountController initial={5} lowerBound={-10} upperBound={15} />
        <CountController initial={10} upperBound={20} />
      </div>
      <div style={{
				display: 'flex',
				gap: '1rem',
				justifyContent: 'space-around',
				margin: 'auto',
			}}>
                <div>
                    <h1>Users</h1>
                    <hr />
                    {user.loading && <h3>Loading....</h3>}
                    {user.error && <h3>{user.error}</h3>}
                    {user.data?.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </div>
                <div>
                    <h1>Posts</h1>
                    <hr />
                    {posts.loading && <h3>Loading....</h3>}
                    {posts.error && <h3>{posts.error}</h3>}
                    {posts.data?.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </div>
                <div>
                    <h1>Comments</h1>
                    <hr />
                    {comments.loading && <h3>Loading....</h3>}
                    {comments.error && <h3>{comments.error}</h3>}
                    {comments.data?.map(comment => (
                        <li key={comment.id}>{comment.name}</li>
                    ))}
                </div>
      </div>
    </div>
  );
};

export default CustomHooks;
