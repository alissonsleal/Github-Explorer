import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore Github repositories</Title>
      <Form>
        <input type="text" placeholder="Type the repository name" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://images.unsplash.com/photo-1604596610075-4b2b06b5eb93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=294&q=80"
            alt="person name"
          />
          <div>
            <strong>personName/repoName</strong>
            <p>repoDescription</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://images.unsplash.com/photo-1604596610075-4b2b06b5eb93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=294&q=80"
            alt="person name"
          />
          <div>
            <strong>personName/repoName</strong>
            <p>repoDescription</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://images.unsplash.com/photo-1604596610075-4b2b06b5eb93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=294&q=80"
            alt="person name"
          />
          <div>
            <strong>personName/repoName</strong>
            <p>repoDescription</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
