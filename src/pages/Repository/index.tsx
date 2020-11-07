import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { Nav, Header, Main, Status, EachStatus, Item } from './styles';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  html_url: string;
  title: string;
  user: {
    login: string;
  };
}

function Repository() {
  const { params } = useRouteMatch<RepositoryParams>();

  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    api.get(`/repos/${params.repository}`).then((response) => {
      setRepository(response.data);
    });

    api.get(`/repos/${params.repository}/issues`).then((response) => {
      setIssues(response.data);
    });
  }, [params.repository]);

  return (
    <>
      <Nav>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">Voltar</Link>
      </Nav>

      <Main>
        {repository && (
          <Header>
            <main>
              <img src={repository.owner.avatar_url} alt="User Avatar" />
              <section>
                <strong>{params.repository}</strong>
                <p>{repository.description}</p>
              </section>
            </main>
            <Status>
              <section>
                <strong>{repository.stargazers_count}</strong>
                <p>Stars</p>
              </section>
              <section>
                <strong>{repository.forks_count}</strong>
                <p>Forks</p>
              </section>
              <section>
                <strong>{repository.open_issues_count}</strong>
                <p>Open Issues</p>
              </section>
            </Status>
          </Header>
        )}

        <Item>
          {issues &&
            issues.map((issue) => (
              <a
                key={issue.id}
                href={issue.html_url}
                target="_blank"
                rel="noreferrer"
              >
                <EachStatus>
                  <section>
                    <strong>{issue.title}</strong>
                    <p>{issue.user.login}</p>
                  </section>
                  <FiChevronRight size={20} />
                </EachStatus>
              </a>
            ))}
        </Item>
      </Main>
    </>
  );
}

export default Repository;
