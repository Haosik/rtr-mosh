import React from 'react';
import { parse } from 'query-string';

const Posts = ({ match, location }) => {
  const { sortBy } = parse(location.search);
  return (
    <div>
      <h1>Posts</h1>
      <div>{sortBy}</div>
      Year: {match.params.year}, Month: {match.params.month}
    </div>
  );
};

export default Posts;
