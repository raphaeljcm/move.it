import axios, { AxiosRequestConfig, CancelTokenSource } from 'axios';
import Head from 'next/head';
import { ChangeEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FadeLoader } from 'react-spinners';
import { api } from '../../services/api';
import * as S from '../../styles/pages/create';

enum Image {
  NOT_SENT = 'NOT-SENT',
  SENDING = 'SENDING',
  SENT = 'SENT',
}

export default function Create() {
  const [imageUrlTest, setImageUrlTest] = useState('');
  const [imageState, setImageState] = useState(Image.NOT_SENT);
  const [error, setError] = useState(false);
  const [cancelToken, setCancelToken] = useState<CancelTokenSource | null>(
    {} as CancelTokenSource
  );

  async function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return;
    }

    setImageState(Image.SENDING);
    setError(false);
    setImageUrlTest('');

    const controller = new AbortController();
    const formData = new FormData();
    formData.append(event.target.name, event.target.files[0]);
    formData.append('key', process.env.NEXT_PUBLIC_IMGBB_API_KEY as string);

    const { CancelToken } = axios;
    const source = CancelToken.source();
    setCancelToken(source);

    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      cancelToken: source.token,
    } as AxiosRequestConfig;

    try {
      await api.post(`https://api.imgbb.com/1/upload`, formData, config);
      toast.success('Upload de imagem feito com sucesso!');
    } catch (err: any) {
      controller.abort();
      toast.error('Erro ao fazer upload de imagem');
      setError(true);
    } finally {
      setImageState(Image.SENT);
      setImageUrlTest(URL.createObjectURL(event.target.files[0]));
    }
  }

  useEffect(() => {
    if (imageState === Image.SENDING && cancelToken?.cancel && error) {
      cancelToken.cancel('Cancelled image upload.');
      setCancelToken(null);
    }
  }, [cancelToken, imageState, error]);

  return (
    <S.CreateUserContainer>
      <Head>
        <title>Criar usuário - move.it 2.0</title>
      </Head>

      <img src="/three-lines.png" alt="Três linhas da logo do move.it" />

      <main>
        <img src="/logo-full-white.svg" alt="Logo move.it" />

        <section>
          {imageState === Image.NOT_SENT ? (
            <>
              <label htmlFor="file" />
              <div />
              <input
                type="file"
                id="file"
                name="image"
                onChange={e => handleImageChange(e)}
              />
            </>
          ) : imageState === Image.SENDING ? (
            <FadeLoader color="#4953b8" />
          ) : (
            <>
              <img src={imageUrlTest} alt="Usuario" />
              <input
                type="file"
                id="file"
                name="image"
                onChange={e => handleImageChange(e)}
              />
            </>
          )}
          <input type="text" placeholder="Digite seu username" />
          <button type="submit">Criar conta</button>
        </section>
      </main>
    </S.CreateUserContainer>
  );
}
