import axios, { AxiosRequestConfig } from 'axios';
import Head from 'next/head';
import { ChangeEvent } from 'react';
import { api } from '../../services/api';
import * as S from '../../styles/users/create/styles';

export default function Create() {
  async function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return;
    }

    const controller = new AbortController();
    const formData = new FormData();
    formData.append(event.target.name, event.target.files[0]);
    formData.append('key', process.env.NEXT_PUBLIC_IMGBB_API_KEY as string);

    const { CancelToken } = axios;
    const source = CancelToken.source();

    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      cancelToken: source.token,
    } as AxiosRequestConfig;

    try {
      const response = await api.post(
        `https://api.imgbb.com/1/upload`,
        formData,
        config
      );

      console.log(response);
    } catch (err: any) {
      controller.abort();
      console.log(err.message);
    }
  }

  return (
    <S.CreateUserContainer>
      <Head>
        <title>Criar usuário - move.it 2.0</title>
      </Head>

      <img src="/three-lines.png" alt="Três linhas da logo do move.it" />

      <main>
        <img src="/logo-full-white.svg" alt="Logo move.it" />

        <section>
          <label htmlFor="file" />
          <input
            type="file"
            id="file"
            name="image"
            onChange={e => handleImageChange(e)}
          />
          <input type="text" />
          <button type="submit" />
        </section>
      </main>
    </S.CreateUserContainer>
  );
}
