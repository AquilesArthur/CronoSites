import { Helmet } from "react-helmet-async";

export default function Terms() {
  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <Helmet>
        <title>Termos de Uso | Crono Sites</title>
        <meta name="description" content="Consulte nossos Termos de Uso e saiba as condições para a utilização dos serviços e do site da Crono Sites." />
        <meta property="og:title" content="Termos de Uso | Crono Sites" />
        <meta property="og:description" content="Consulte nossos Termos de Uso e saiba as condições para a utilização dos serviços e do site da Crono Sites." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-crono-dark mb-8">Termos de Uso</h1>
        <div className="prose prose-gray max-w-none text-gray-600 font-light leading-relaxed space-y-6">
          <p>
            Ao acessar ao site <strong>Crono Sites</strong>, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
          </p>
          
          <h2 className="text-2xl font-semibold text-crono-dark pt-4">1. Uso de Licença</h2>
          <p>
            É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Crono Sites, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Modificar ou copiar os materiais;</li>
            <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
            <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Crono Sites;</li>
            <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
            <li>Transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
          </ul>
          <p>
            Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida pela Crono Sites a qualquer momento.
          </p>

          <h2 className="text-2xl font-semibold text-crono-dark pt-4">2. Isenção de responsabilidade</h2>
          <p>
            Os materiais no site da Crono Sites são fornecidos 'como estão'. A Crono Sites não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
          </p>

          <h2 className="text-2xl font-semibold text-crono-dark pt-4">3. Limitações</h2>
          <p>
            Em nenhum caso a Crono Sites ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Crono Sites, mesmo que a Crono Sites ou um representante autorizado da Crono Sites tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.
          </p>

          <h2 className="text-2xl font-semibold text-crono-dark pt-4">4. Precisão dos materiais</h2>
          <p>
            Os materiais exibidos no site da Crono Sites podem incluir erros técnicos, tipográficos ou fotográficos. A Crono Sites não garante que qualquer material em seu site seja preciso, completo ou atual. A Crono Sites pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, a Crono Sites não se compromete a atualizar os materiais.
          </p>

          <h2 className="text-2xl font-semibold text-crono-dark pt-4">5. Modificações</h2>
          <p>
            A Crono Sites pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
          </p>

          <h2 className="text-2xl font-semibold text-crono-dark pt-4">6. Lei aplicável</h2>
          <p>
            Estes termos e condições são regidos e interpretados de acordo com as leis brasileiras e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
          </p>
        </div>
      </div>
    </main>
  );
}
