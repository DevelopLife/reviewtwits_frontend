import { api } from 'api/instance';
import { useEffect } from 'react';

const TestPage = () => {
  useEffect(() => {
    api.get('/projects');
  }, []);

  return <div>test</div>;
};

export default TestPage;
