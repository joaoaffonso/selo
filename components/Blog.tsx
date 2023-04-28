import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog: React.FC = () => {
return (
<div>
<Head>
<title>Blog - Seu Site</title>
{/* Meta tags e outros elementos do cabeçalho */}
</Head>
<div>
<h1>Bem-vindo ao nosso Blog!</h1>
<p>
Neste espaço, compartilharemos notícias, atualizações e informações sobre os artistas do nosso selo musical experimental. Aqui você poderá ficar por dentro de todas as novidades, curiosidades e eventos relacionados à música experimental e aos artistas que fazem parte do nosso selo.
</p>
<h2>Últimas Notícias</h2>
<div>
<h3>Título da Notícia 1</h3>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel quam tincidunt, tristique sapien in, efficitur ipsum. Nullam tincidunt tortor ut turpis volutpat, nec congue arcu tempus. Aenean tempor est ac quam interdum, at facilisis dolor pharetra. Vestibulum eget ligula ut odio ullamcorper pharetra.
</p>
</div>
<div>
<h3>Título da Notícia 2</h3>
<p>
Sed vestibulum risus eu augue lacinia, et dictum risus efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce vel libero volutpat, pharetra tellus id, eleifend elit. Sed consectetur sapien elit, eu sagittis tellus tristique eu. Cras nec odio gravida, cursus ex a, malesuada sapien.
</p>
</div>
<div>
<h3>Título da Notícia 3</h3>
<p>
Quisque lacinia mi sit amet sagittis tristique. Suspendisse vel sapien vitae sem feugiat vestibulum. Quisque in nulla tincidunt, vehicula ex sit amet, cursus dui. Praesent tincidunt, tellus nec hendrerit rutrum, sapien sapien pellentesque ipsum, vitae dapibus neque odio ut augue.
</p>
</div>
</div>
</div>
);
};

export default Blog;
