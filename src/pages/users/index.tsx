import Head from 'next/head';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { useUsers } from '../../contexts/UsersContext';
import { githubApi } from '../../services/api';
import * as S from '../../styles/pages/users';
import { Profile } from '../../components/Profile/index';

export default function Users() {
  const [inputValue, setInputValue] = useState('');
  const { addUser, users } = useUsers();
  const inputHasContent = inputValue.length > 0;

  async function addUserByGithub(event: FormEvent) {
    event.preventDefault();

    try {
      const { data } = await githubApi(`/${inputValue}`);
      addUser({ name: data.name, imageUrl: data.avatar_url });

      toast.success('Created user');
    } catch (err: any) {
      console.error(err.message);
      toast.error('Usuário não encontrado');
    }
  }

  return (
    <S.LoginContainer>
      <Head>
        <title>Raphael Marques - move.it 2.0</title>
      </Head>

      <img src="/three-lines.png" alt="Três linhas da logo do move.it" />

      <main>
        <img src="/logo-full-white.svg" alt="Logo move.it" />

        <div>
          <h1>Bem vindo</h1>

          {users.length > 0 ? (
            <Profile />
          ) : (
            <div>
              <img src="/icons/github.svg" alt="Ícone do github" />
              <div>
                <p>Faça login com seu github para começar</p>
              </div>
            </div>
          )}

          <form onSubmit={addUserByGithub}>
            <input
              type="text"
              placeholder="Digite seu username"
              onChange={e => setInputValue(e.target.value)}
              value={inputValue}
            />
            <button
              type="submit"
              className={`${inputHasContent ? 'active' : ''}`}
            />
          </form>
        </div>
      </main>
    </S.LoginContainer>
  );
}
