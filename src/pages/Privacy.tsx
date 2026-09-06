import { Helmet } from "react-helmet-async";

export default function Privacy() {
  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <Helmet>
        <title>Política de Privacidade | CronoSites</title>
        <meta name="description" content="Leia nossa Política de Privacidade para entender como a CronoSites coleta, utiliza e protege as suas informações e dados pessoais." />
        <meta property="og:title" content="Política de Privacidade | CronoSites" />
        <meta property="og:description" content="Leia nossa Política de Privacidade para entender como a CronoSites coleta, utiliza e protege as suas informações e dados pessoais." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-crono-dark mb-8">Política de Privacidade</h1>
        <div className="prose prose-gray max-w-none text-gray-600 font-light leading-relaxed space-y-6">
          <p>
            Na <strong>CronoSites</strong>, privacidade e segurança são prioridades e nos comprometemos com a transparência do tratamento de dados pessoais dos nossos usuários/clientes. Por isso, a presente Política de Privacidade estabelece como é feita a coleta, uso e transferência de informações de clientes ou outras pessoas que acessam ou usam nosso site.
          </p>
          <h2 className="text-2xl font-semibold text-crono-dark pt-4">1. Quais dados coletamos sobre você e para qual finalidade?</h2>
          <p>
            Nosso site coleta e utiliza alguns dados pessoais seus, de forma a viabilizar a prestação de serviços e aprimorar a experiência de uso:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Dados fornecidos pelo usuário:</strong> Nome, telefone, e-mail e outras informações enviadas ativamente ao preencher nossos formulários de contato para solicitação de orçamento.</li>
            <li><strong>Dados coletados automaticamente:</strong> Quando você acessa nosso site, podemos coletar informações sobre sua navegação (como IP, tipo de navegador, páginas visitadas) por meio de cookies e tecnologias semelhantes, visando a melhoria contínua da sua experiência.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-crono-dark pt-4">2. Como coletamos os seus dados?</h2>
          <p>
            A coleta dos seus dados pessoais ocorre da seguinte forma:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Quando você preenche formulários de contato no site;</li>
            <li>Quando você entra em contato conosco diretamente via WhatsApp ou e-mail;</li>
            <li>Automaticamente através de cookies essenciais durante a sua navegação.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-crono-dark pt-4">3. Consentimento</h2>
          <p>
            É a partir do seu consentimento que tratamos os seus dados pessoais. O consentimento é a manifestação livre, informada e inequívoca pela qual você autoriza a CronoSites a tratar seus dados. Ao utilizar os nossos serviços e fornecer seus dados pessoais, você está ciente e consentindo com as disposições desta Política de Privacidade.
          </p>

          <h2 className="text-2xl font-semibold text-crono-dark pt-4">4. Com quem compartilhamos os seus dados?</h2>
          <p>
            Para garantir a prestação dos nossos serviços, podemos compartilhar dados exclusivamente com parceiros tecnológicos (como provedores de hospedagem e serviços de e-mail), que seguem rígidos padrões de segurança e confidencialidade. Não vendemos ou comercializamos seus dados pessoais sob nenhuma circunstância.
          </p>

          <h2 className="text-2xl font-semibold text-crono-dark pt-4">5. Segurança dos Dados</h2>
          <p>
            Para mantermos suas informações pessoais seguras, usamos ferramentas físicas, eletrônicas e gerenciais voltadas para a proteção da sua privacidade. Aplicamos essas ferramentas levando em consideração a natureza dos dados pessoais coletados, o contexto e a finalidade do tratamento.
          </p>

          <h2 className="text-2xl font-semibold text-crono-dark pt-4">6. Alterações nesta Política</h2>
          <p>
            A atual versão da Política de Privacidade foi formulada e atualizada pela última vez em {new Date().toLocaleDateString('pt-BR')}. Reservamo-nos o direito de modificar essa Política a qualquer tempo, principalmente em função da adequação a eventuais alterações feitas em nosso site ou em âmbito legislativo.
          </p>

          <h2 className="text-2xl font-semibold text-crono-dark pt-4">7. Contato</h2>
          <p>
            Em caso de dúvidas sobre esta Política de Privacidade ou sobre os dados pessoais que tratamos, você pode entrar em contato pelo nosso e-mail: <strong>contatocrono@gmail.com</strong>.
          </p>
        </div>
      </div>
    </main>
  );
}
