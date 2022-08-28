import React from 'react';
import { MyButton } from 'ui';
import { GetPostsDTO } from 'shared';
import './App.css';

function App() {
  const data: GetPostsDTO = {
    posts: [{
      author: {
        mail: 'asdf@asdf.de',
        name: 'Peter Lustig'
      },
      title: 'Hello world',
      content: 'whatever it takes'
    }]
  };

  return (
    <div className="App">
      <MyButton />
      {
        data.posts.map((post) => (
          <a href="/">
            { post.title }
          </a>
        ))
      }
    </div>
  );
}

export default App;
