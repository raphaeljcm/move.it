import Head from 'next/head';
import { useState } from 'react';
import * as S from '../../styles/pages/users';

export default function Users() {
  const [inputValue, setInputValue] = useState('');
  const inputHasContent = inputValue.length > 0;

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
          <div>
            <img src="/icons/github.svg" alt="Ícone do github" />
            <div>
              <p>Faça login com seu github para começar</p>
            </div>
          </div>
          <div>
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
          </div>
        </div>
      </main>
    </S.LoginContainer>
  );
}
