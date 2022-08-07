import Head from 'next/head';
import * as S from '../../styles/create-user/styles';

export default function CreateUser() {
  return (
    <S.CreateUserContainer>
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
            <input type="text" placeholder="Digite seu username" />
            <button type="submit" />
          </div>
        </div>
      </main>
    </S.CreateUserContainer>
  );
}
