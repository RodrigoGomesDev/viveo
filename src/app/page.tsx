import { redirect } from 'next/navigation';

export default function Home() {

  // uso do redirect, pois o router estava fazendo as estilizações n carregarem!
  redirect('/login');
}
