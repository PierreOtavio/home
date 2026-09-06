import PizzaCard from '../src/components/PizzaCard'

// Logo
import logoGra from './assets/logo.png'

// Frango com Bacon
import frango1 from '../public/pizzas/pizza (2).jpeg'
import frango2 from '../public/pizzas/pizza (6).jpeg'
import frango3 from '../public/pizzas/pizza (5).jpeg'

// Pepperoni
import peperoni1 from '../public/pizzas/pizza (1).jpeg'
import peperoni2 from '../public/pizzas/pizza (4).jpeg'

// Meio a Meio (À Moda / Frango)
import meiaFrangoMeiaAModa1 from '../public/pizzas/pizza (27).jpeg'
import meiaFrangoMeiaAModa2 from '../public/pizzas/pizza (9).jpeg'

// À Moda da Grá (4 Sabores)
import aModa1 from '../public/pizzas/pizza1 (1).jpeg'
import aModa2 from '../public/pizzas/pizza1 (2).jpeg'
import aModa3 from '../public/pizzas/pizza1 (3).jpeg'

// 3 sabores
import sabores1 from '../public/pizzas/pizza1 (4).jpeg'
import sabores2 from '../public/pizzas/pizza1 (5).jpeg'
import sabores3 from '../public/pizzas/pizza1 (6).jpeg'

// Doce Coração
import doce1 from '../public/pizzas/pizza (16).jpeg'
import doce2 from '../public/pizzas/pizza (14).jpeg'
import doce3 from '../public/pizzas/pizza (15).jpeg'

export default function App() {
  const whatsappNumero = "5537999340069"
  const instagramUser = "pizzariadagra"

  const cardapio = [
    {
      id: 1,
      nome: "1/2 À moda da Grá 1/2 Frango c/ Bacon (G)",
      descricao: "Nossa tradicional combinação de embutidos e queijos da casa, dividindo espaço com frango desfiado suculento e cubos crocantes de bacon.",
      preco: "R$ 69,90",
      imagens: [meiaFrangoMeiaAModa1, meiaFrangoMeiaAModa2, meiaFrangoMeiaAModa1]
    },
    {
      id: 2,
      nome: "Frango com Bacon Crocante (G)",
      descricao: "Base suculenta de frango desfiado, mussarela derretida, cubos crocantes de bacon e azeitonas. Podendo ir com tomate/cebola, à escolha do cliente.",
      preco: "R$ 69,90",
      imagens: [frango1, frango2, frango3]
    },
    {
      id: 3,
      nome: "1/2 Frango c/ Bacon 1/2 Pepperoni (P)",
      descricao: "Metade coberta com fatias selecionadas de pepperoni levemente picante, tomates e cebola, combinada com a outra metade de frango e bacon.",
      preco: "R$ 39,90",
      imagens: [peperoni1, peperoni2, peperoni1]
    },
    {
      id: 4,
      nome: "1/2 Frango e 1/2 Calabresa (G)",
      descricao: "A combinação perfeita entre dois clássicos favoritos: metade coberta com bastante frango desfiado suculento e uma generosa camada de mussarela derretida, e metade com fatias selecionadas de calabresa artesanal e anéis finos de cebola, ambas finalizadas com rodelas frescas de tomate, azeitonas verdes, cebola e um toque aromático de orégano.",
      preco: "R$ 64,90",
      imagens: [aModa1, aModa2, aModa3]
    },
    {
      id: 5,
      nome: "Dois Amores Especial (M)",
      descricao: "Massa artesanal em formato de coração: metade chocolate cremoso com confeitos, metade creme com biscoitos triturados. IMAGEM ILUSTRATIVA",
      preco: "R$ 52,90",
      imagens: [doce1, doce2, doce3]
    },
    {
      id: 6,
      nome: 'Pizza 3 sabores (G)',
      descricao: 'O trio clássico reunido em uma única receita farta: uma parte de frango desfiado bem temperado coberto por mussarela derretida, uma parte de calabresa fatiada com anéis de cebola, e uma parte de presunto ralado com bastante queijo, todas finalizadas com fatias frescas de tomate, azeitonas verdes, cebola e orégano salpicado.',
      preco: 'R$ 69,90',
      imagens: [sabores1, sabores2, sabores3]
    }
  ]

  return (
    <div>
      {/* 1. SEÇÃO HERO (Fundo Vermelho) */}
      <section className="secao-full bg-vermelho">
        <div className="container hero-layout">
          <div className="hero-textos">
            <h1 className="hero-titulo">O Sabor Artesanal</h1>
            <p className="hero-subtitulo">
              Tradição que se prova a cada fatia. Mergulhe no nosso cardápio, escolha o seu ângulo favorito e deixe a Grá surpreender você.
            </p>
            <div className="botoes-container">
              <a
                href={`https://wa.me/${whatsappNumero}?text=Ol%C3%A1,%20boa%20noite,%20vim%20pelo%20site%20e%20gostaria%20de%20ver%20o%20card%C3%A1pio%20por%20favor`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primario"
              >
                💬 Ver Cardápio no WhatsApp
              </a>
              <a
                href={`https://instagram.com/${instagramUser}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secundario"
              >
                📸 Seguir no Instagram
              </a>
            </div>
          </div>
          <div className="hero-logo">
            <img src={logoGra} alt="Pizzaria da Grá" className="logo-img" />
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO CARDÁPIO (Fundo Laranja) */}
      <section className="secao-full bg-laranja">
        <div className="container">
          <h2 className="secao-titulo">Um gostinho do nosso cardápio</h2>
          <div className="grid-cardapio">
            {cardapio.map((pizza) => (
              <PizzaCard
                key={pizza.id}
                nome={pizza.nome}
                descricao={pizza.descricao}
                preco={pizza.preco}
                imagens={pizza.imagens}
                whatsappNumero={whatsappNumero}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO MVV (Fundo Escuro Premium) */}
      <section className="secao-full bg-escuro">
        <div className="container">
          <h2 className="secao-titulo" style={{ color: 'var(--cor-creme)' }}>A Essência da Grá</h2>
          <div className="grid-mvv">
            <div className="mvv-card">
              <div className="mvv-icone">🍕</div>
              <h3 className="mvv-titulo">Nossa Missão</h3>
              <p>Transformar ingredientes frescos em fatias de pura felicidade, garantindo que cada entrega leve calor, fartura e o verdadeiro sabor artesanal para a sua mesa.</p>
            </div>
            <div className="mvv-card">
              <div className="mvv-icone">⭐</div>
              <h3 className="mvv-titulo">Nossa Visão</h3>
              <p>Ser a pizzaria referência em qualidade e experiência na região, lembrada sempre pela autenticidade das receitas e pelo carinho em cada detalhe.</p>
            </div>
            <div className="mvv-card">
              <div className="mvv-icone">❤️</div>
              <h3 className="mvv-titulo">Nossos Valores</h3>
              <p>Fartura sem economia, higiene impecável, respeito absoluto ao cliente e a paixão genuína por criar pizzas que marcam momentos especiais.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO FOOTER / INFO LEGAL (Fundo Laranja) */}
      <footer className="secao-full bg-laranja">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>📍 Onde Estamos</h3>
              <p>Rua Olímpio Gomes Branquinho, 361</p>
              <p>Nossa Senhora das Graças</p>
              <p>Divinópolis - MG</p>
            </div>

            <div className="footer-col">
              <h3>⏰ Horário de Atendimento</h3>
              <p>Quarta a Domingo</p>
              <p>Das 18:30 às 22:30</p>
              <p style={{ marginTop: '10px', fontSize: '0.85rem' }}>* Sujeito a alterações em feriados.</p>
            </div>

            <div className="footer-col">
              <h3>📞 Contato Direto</h3>
              <p>WhatsApp: (37) 99934-0069</p>
              <p>E-mail: gracielacongelados@gmail.com</p>
              <p>Instagram: @{instagramUser}</p>
            </div>

            <div className="footer-col">
              <h3>⚖️ Informações Legais</h3>
              <p>Pizzaria da Grá</p>
              <p>CNPJ: 54.948.862/0001-70</p>
            </div>
          </div>

          <div className="footer-legal">
            <p>As imagens presentes neste site são meramente ilustrativas.</p>
            <p>Preços e disponibilidade de produtos sujeitos a alteração sem aviso prévio. Taxa de entrega não inclusa nos valores informados.</p>
            <p>Em caso de alergias ou restrições alimentares (como intolerância a lactose ou glúten), por favor, informe nossa equipe no momento do pedido.</p>
            <p style={{ marginTop: '20px' }}>© {new Date().getFullYear()} Pizzaria da Grá — Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}