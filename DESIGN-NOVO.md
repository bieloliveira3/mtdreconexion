# Método Reconexión — Arquitetura, hierarquia visual e especificação de design

**Escopo:** estrutura, layout, tipografia, cor, espaçamento, mobile e acessibilidade.
**Fora do escopo:** copy (arquivo `COPY-NOVA.md`, outro agente) e implementação `.tsx`.
**Premissa comercial:** um produto só, `US$ 6,99`. O segundo produto (Caja de Herramientas) sai da página e vira order bump no checkout.
**Contexto:** tráfego frio Meta, ~85% mobile, Colômbia e México, ticket baixo, decisão emocional e rápida, tema íntimo.

Onde este documento pede texto, ele marca o slot como `[COPY]`. Nenhuma frase abaixo é copy final.

---

## 0. Princípio de design

O tema é vergonha. Isso governa três decisões que atravessam a página inteira:

1. **Discrição em vez de agressividade.** Sem contadores, sem vermelho de alarme, sem selo de "última chance", sem exclamação tipográfica. O peso persuasivo vem de prova visual do produto e de clareza, não de pressão.
2. **Prova do produto cedo.** O usuário precisa ver o que recebe antes de aceitar qualquer argumento. Hoje isso acontece a ~5.700px; passa a acontecer a ~1.500px.
3. **Uma decisão só.** Um produto, um preço, um botão, sempre o mesmo destino. A bifurcação atual (Método vs Completa) é a maior perda de conversão da página e é eliminada.

---

## 1. Nova ordem das seções

| # | Seção | Estado | Justificativa (uma linha) |
|---|---|---|---|
| 1 | **TrustStrip** (ex-`UrgencyBar`) | reescrever | Faixa factual de 36px (acesso imediato / pagamento único / garantia 7 dias): remove a urgência falsa e responde à ansiedade do tráfego frio antes do H1. |
| 2 | **Header** | enxugar | Logo + um CTA; nav só ≥768px; não empurra o H1 para baixo. |
| 3 | **Hero** | recompor | Promessa + âncora de preço + CTA #1 dentro da primeira rolagem. |
| 4 | **ProblemSection** | condensar p/ 4 itens | Espelho curto: o anúncio já agitou o problema, aqui só se confirma que a página é sobre ele. |
| 5 | **ProductReveal** — "Mira por dentro" (**vídeo vertical + páginas**) | **nova seção** | Prova do produto a ~1.500px em vez de 5.700px: é o que converte tráfego frio de baixo ticket. |
| 6 | **MethodSection + Plano 90 dias** | fundir | O mecanismo (7 fases) e o cronograma (90 dias) são o mesmo argumento — "existe um mapa" — e hoje ocupam duas seções para dizer isso duas vezes. |
| 7 | **AuthorSection** | **subir** (era 6ª de 13, passa a preceder a prova social) | Quem escreveu isso precisa aparecer logo depois do mecanismo, no pico de ceticismo, e antes de qualquer preço; a posição atual está tarde e isolada. |
| 8 | **TestimonialsSection** | compactar em carrossel | Prova social encostada na autora: as duas batidas "gente de verdade" acontecem juntas, uma vez só. |
| 9 | **OnePersonSection** | **subir** para logo antes da oferta | É a objeção nº 1 deste público ("cheguei sozinho, ele/ela não quer") e precisa estar resolvida no instante anterior ao preço. |
| 10 | **OfferSection** | **redesenhar — produto único** | Uma oferta, uma âncora, um botão; começa a ~4.200px em vez de ~7.000px. |
| 11 | **FAQ** | manter | Objeções residuais de quem rolou até o fim sem clicar. |
| 12 | **SafetyNote** | manter, quieta | Nota de violência: obrigação ética e, neste nicho, sinal de cuidado — mas discreta, nunca como bloco de destaque. |
| 13 | **FinalCTA** | encurtar | Fechamento emocional + CTA #5 para quem leu tudo. |
| 14 | **Footer** | manter | Legal, contato, políticas. |
| 15 | **MobileStickyCTA** | **redesenhar — sem seletor** | Preço + botão em uma linha; sem escolha, sem bifurcação. |

**Removidas da composição:** `GalleryCarousel`, `InsideBookSection` (ver §8).

### Altura-alvo (viewport mobile 375×812, DPR 3)

| Marco | Hoje | Alvo | Δ |
|---|---|---|---|
| Primeiro CTA totalmente visível | ~640px (ok, mas o card empurra) | **≤ 700px** (sem rolar mais de 0,9 tela) | — |
| Prova visual do produto | ~5.700px | **~1.500px** | −74% |
| Início da seção de oferta | ~7.000px | **≤ 4.200px** | −40% |
| Altura total da página | ~9.700px | **≤ 7.800px** | −20% |

Orçamento por bloco (mobile, aproximado, para o dev calibrar): TrustStrip 36 · Header 56 · Hero 760 · Problem 520 · ProductReveal 980 · Método+90d 1.120 · Autora 720 · Depoimentos 560 · UnaPersona 480 · Oferta 1.280 · FAQ 640 · SafetyNote 170 · FinalCTA 400 · Footer 300.

---

## 2. CTAs — quantidade, posição e função

**Sete pontos de clique, um único destino** (`CHECKOUT_URL`). Nenhum deles abre modal, nenhum leva a âncora interna.

| # | Onde | Aparência | Função (o que muda entre eles) |
|---|---|---|---|
| 0 | Header (sticky) | `sm`, borgonha sólido, 40px alto | Atalho permanente para quem já decidiu; texto curto, sem promessa. `[COPY: 2–3 palavras]` |
| 1 | Hero, dentro do card de preço | `lg`, largura total, borgonha | **Compra por impulso.** É o único CTA precedido de preço na primeira tela. `[COPY: verbo de início + benefício]` |
| 2 | ProductReveal, abaixo do vídeo | `lg`, largura total, creme sobre fundo escuro | **Compra por prova.** Vem logo depois de ver as páginas: fala em "ter isso agora", não em transformação. `[COPY: acesso/receber]` |
| 3 | Fim de Método+90 dias | `lg`, borgonha, largura total mobile / auto desktop | **Compra por plano.** O leitor acabou de ver a estrutura: o CTA fala em começar a fase 1. `[COPY: começar pelo passo 1]` |
| 4 | OfferSection | `lg`, creme sobre escuro, 56px alto, largura total | **Botão principal da página.** O único cercado de preço + garantia + fatos de entrega. `[COPY: o mais explícito e transacional]` |
| 5 | FinalCTA | `lg`, borgonha | **Compra por adesão emocional.** Para quem leu tudo; o mais suave dos sete. `[COPY: tom de decisão pessoal]` |
| 6 | MobileStickyCTA | 52px alto, borgonha, largura total | **Rede de segurança.** Aparece após o Hero sair da tela, some quando a OfferSection entra no viewport (não competir com o CTA #4). |

**Regras:**
- Todos os sete têm a mesma forma (raio `--radius-lg`), o mesmo peso (600) e a mesma família (Inter). Só o tamanho e o par de cores mudam.
- Todos terminam com o mesmo glifo direcional (`→`), presente em todos ou em nenhum — não misturar.
- Nenhuma seção tem dois CTAs.
- Distância máxima entre dois CTAs consecutivos: **1.400px**. Nada na página deixa o usuário rolar mais que isso sem um botão à vista (o sticky cobre os vãos).

---

## 3. Hierarquia tipográfica

Playfair Display (`--font-display`) só em H1, H2, H3 e no número do preço. Inter (`--font-sans`) em todo o resto. Nunca Playfair em corpo de texto.

| Papel | Mobile | Desktop (≥768px) | Peso | Entrelinha | Tracking |
|---|---|---|---|---|---|
| **H1** (Hero, único na página) | `2.0rem` | `3.25rem` | 600 | 1.12 / 1.06 | −0.02em |
| **H2** (título de seção) | `1.625rem` | `2.25rem` | 600 | 1.18 / 1.14 | −0.015em |
| **H3** (card, fase, mês, pergunta FAQ) | `1.125rem` | `1.25rem` | 600 | 1.30 | −0.01em |
| **Subtítulo do Hero** (deck) | `1.0625rem` | `1.25rem` | 400 | 1.55 | 0 |
| **Corpo** | `1.0625rem` (17px) | `1.0625rem` | 400 | 1.62 | 0 |
| **Corpo secundário** (descrição de card, item de lista) | `0.9375rem` (15px) | `0.9375rem` | 400 | 1.60 | 0 |
| **Legenda / nota** (garantia inline, moeda local, disclaimers) | `0.8125rem` (13px) | `0.8125rem` | 400 | 1.50 | 0 |
| **Eyebrow** (rótulo de seção) | `0.6875rem` | `0.6875rem` | 600 | 1.2 | 0.18em, caixa alta |
| **Preço principal** | `3rem` | `3.5rem` | 600 Playfair | 1.0 | −0.02em |
| **Preço em COP** | `1.125rem` | `1.25rem` | 600 Playfair | 1.0 | 0 |
| **Preço riscado (âncora)** | `1rem` | `1.125rem` | 400 | 1.0 | 0 |
| **Rótulo de botão** | `0.9375rem` | `1rem` | 600 | 1.0 | 0.02em |

**Correções obrigatórias em relação ao estado atual:**
- Corpo sobe de `0.95rem` (15,2px) para `1.0625rem` (17px). Público 35–55 anos lendo texto íntimo no celular: 15px é o piso do desconforto.
- **`0.72rem` (11,5px) é banido.** Hoje aparece 5× (conversão de moeda, notas do offer). Tudo isso vira `0.8125rem` ou é cortado.
- **Máximo 3 níveis tipográficos visíveis por seção.** A OfferSection atual tem 7.
- Medida de linha: **máx. 65ch** em corpo, **máx. 20ch** em H1, **máx. 24ch** em H2. O H1 atual quebra em 5 linhas no mobile — travar em 3.
- Um H1 por página. Todo H2 tem `id` só quando é destino de âncora do header.

---

## 4. Espaçamento vertical

Escala base 4px, já compatível com Tailwind. Usar **apenas** estes degraus: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 80 · 96`.

### Ritmo entre seções

| Tipo de seção | Padding vertical mobile | Desktop |
|---|---|---|
| Padrão (Problem, Método, Autora, Depoimentos, UnaPersona, FAQ) | `48px` | `80px` |
| Batida de ênfase (ProductReveal, Oferta) | `64px` | `96px` |
| Nota / pausa (TrustStrip, SafetyNote) | `16px` | `24px` |
| Hero | `48px` topo / `56px` base | `72 / 80` |

Hoje tudo usa `py-16 / py-24` uniforme (64/96): é o que gera os 9.700px. Baixar o padrão para 48/80 e reservar 64/96 só para as duas seções que precisam de ar devolve ~900px sem apertar nada.

### Ritmo dentro da seção

```
eyebrow → H2                16px
H2 → parágrafo de apoio     12px
bloco de texto → grid       32px (mobile) / 40px (desktop)
gap entre cards do grid     16px (mobile) / 20px (desktop)
padding interno de card     20px (mobile) / 28px (desktop)
último elemento → CTA       32px
CTA → microcopy sob o botão 12px
microcopy → garantia        8px
```

**Regra de vizinhança:** duas seções consecutivas de mesmo tom (`base`/`base` ou `surface`/`surface`) precisam somar ≥ 96px de respiro no mobile; se alternarem de tom, 48px basta — a mudança de fundo já faz o corte.

---

## 5. Uso de cor

Tokens existentes, sem cores novas.

| Token | Onde usar | Onde **não** usar |
|---|---|---|
| `--background` (creme quente) | Fundo padrão; texto e botão sobre seções escuras | — |
| `--surface` | Fundo das seções alternadas | Nunca duas seguidas |
| `--primary-dark` (borgonha escuro) | **Fundo** de exatamente duas seções: ProductReveal e Oferta | Como cor de texto em fundo escuro |
| `--cta` / `--cta-dark` (borgonha) | **Todos** os botões sobre fundo claro | Fundo de seção |
| `--gold` | Preço grande, ícone da garantia, filete de 2px, eyebrow **só sobre escuro e ≥1.5rem** | **Texto pequeno em qualquer fundo** (ver §9) |
| `--muted-foreground` | Texto de apoio, legendas | Corpo principal |
| `--destructive` | Em lugar nenhum desta página | — |

### Alternância de fundo (o ritmo)

```
1 TrustStrip      primary-dark  (filete, 36px)
2 Header          background/85 + blur
3 Hero            foto + overlay borgonha-escuro
4 Problem         surface
5 ProductReveal   PRIMARY-DARK  ←── quebra de ritmo nº 1
6 Método + 90d    background
7 Autora          surface
8 Depoimentos     background
9 UnaPersona      surface
10 Oferta         PRIMARY-DARK  ←── quebra de ritmo nº 2
11 FAQ            background
12 SafetyNote     surface (card discreto)
13 FinalCTA       background
14 Footer         primary-dark
```

**Quais seções quebram o ritmo e por quê:**

- **ProductReveal (fundo escuro).** É a primeira vez que o usuário vê o produto. O fundo escuro faz o vídeo vertical e as páginas claras do eBook flutuarem — é o único tratamento em que o mockup lê como objeto real e não como imagem colada. Também sinaliza "aqui é outra coisa" depois de duas seções claras de argumento.
- **Oferta (fundo escuro).** Mesmo tratamento, deliberadamente ecoando o da ProductReveal: quando o fundo escurece pela segunda vez, o usuário já aprendeu que "escuro = o produto". Cria reconhecimento em vez de novidade — é a hora de decidir, não de se surpreender.

Nada mais escurece. Hoje `tone="surface"` está em 7 de 13 seções e o fundo escuro só aparece na oferta: o resultado é uma página plana onde a oferta chega sem preparo visual. Duas âncoras escuras, espaçadas, resolvem isso.

**Ouro é acento, não superfície.** Máximo três ocorrências de ouro por tela: preço, escudo da garantia, um filete. Ouro em bloco (fundo `gold/10`, borda `gold/40`) só no card da garantia dentro da oferta — em qualquer outro lugar vira infoproduto.

---

## 6. OfferSection — especificação de produto único

Substitui o componente atual inteiro. **Sai da página:** o card `RECONEXIÓN COMPLETA`, o selo `RECOMENDADA`, o `ToolboxMarquee`, todo uso de `FULL_BUNDLE_*` e `TOOLBOX_PRICE`, e o parágrafo acadêmico sobre Gottman/Johnson/Rosenberg (migra para a AuthorSection, que é onde ele constrói autoridade em vez de plantar dúvida logo abaixo do botão).

A Caja de Herramientas **não é mencionada em nenhum lugar da página.** Ela existe só como order bump no checkout — mencioná-la aqui reintroduz a decisão que estamos eliminando.

### Layout

**Mobile (coluna única, ordem exata):**

```
┌──────────────────────────────────────┐  fundo primary-dark
│  eyebrow (creme/85, não ouro)        │  ← acesso digital
│  H2  1.625rem, creme                 │  ← 2 linhas máx.
│  ────────────────────────────────    │
│  Mockup 3D do eBook  (w 200px)       │  ← centralizado, halo ouro
│  ────────────────────────────────    │
│  "Qué incluye" — 2 colunas           │  ← 8–10 itens, 0.9375rem
│   ✓ item          ✓ item             │     check em ouro, texto creme/90
│  ────────────────────────────────    │
│  ╔═ CARD DE PREÇO ══════════════╗    │  ← borda gold/30, bg background/6
│  ║ US$ 14,99 riscado, creme/60  ║    │     raio 2xl, padding 24px
│  ║ US$ 6,99   3rem Playfair ouro║    │
│  ║ 23.235 COP  1.125rem ouro/90 ║    │
│  ║ [-53%]  pílula borgonha      ║    │
│  ║ [COPY: pagamento único]  13px║    │
│  ╚══════════════════════════════╝    │
│  ┌──────────────────────────────┐    │
│  │  BOTÃO — 56px, creme, 100%   │    │  ← CTA #4
│  └──────────────────────────────┘    │
│  🛡 garantia 7 dias (inline, 13px)   │  ← 8px abaixo do botão
│  [COPY: entrega imediata] 13px       │  ← 3 fatos, separados por ·
│  [COPY: moeda local no checkout] 13px│  ← 1 linha, creme/70
│  ────────────────────────────────    │
│  ╔═ GuaranteeBadge variant="full" ═╗ │  ← único lugar da versão expandida
│  ╚══════════════════════════════╝    │
└──────────────────────────────────────┘
```

**Desktop (≥1024px):** duas colunas `[0.85fr_1.15fr]` dentro de `max-w-5xl`. Esquerda: mockup grande (280px) + `GuaranteeBadge full` embaixo. Direita: eyebrow, H2, lista de inclusos em 2 colunas, card de preço, botão (largura automática, mín. 320px), microcopy. O card de preço e o botão ficam **sempre acima da dobra do bloco** — a seção inteira cabe em uma tela de 900px de altura.

### Ancoragem de preço

Ordem visual imposta (o olho lê de cima para baixo, do caro para o barato):

1. `US$ 14,99` riscado — âncora alta, `1rem`, creme/60, **nunca em vermelho**
2. `US$ 6,99` — `3rem` Playfair ouro, é o maior número da página inteira
3. `23.235 COP` — `1.125rem` ouro/90; a conversão local é o que decide na Colômbia, precisa estar colada ao dólar e não em nota de rodapé
4. `-53%` — pílula pequena borgonha, alinhada à base do preço grande, `0.8125rem`

Sem "valor total do pacote", sem soma de bônus fictícia, sem "de X por Y" inventado. A âncora é o `OLD_PRICE` que já existe em `site.ts`.

### O que fica ao redor do botão

- **Acima (12px):** nada além do card de preço. Nenhum texto, nenhum link.
- **Imediatamente abaixo (8px):** `GuaranteeBadge variant="inline"` — uma linha, escudo + texto, 13px.
- **Abaixo (12px):** uma linha de fatos de entrega, separados por `·`, 13px, creme/75. `[COPY: 3 fatos — acesso imediato · pagamento único · sem assinatura]`
- **Abaixo (8px):** nota de conversão de moeda, 13px, creme/70, uma vez só na página inteira.
- **Sem competição:** dentro da OfferSection não existe nenhum outro link, âncora, nav ou botão secundário. Nenhum "saiba mais", nenhum "ver índice".

---

## 7. Mobile-first — o que muda

Design a 375px primeiro; desktop é o enriquecimento.

### Alvos de toque

| Elemento | Mínimo |
|---|---|
| CTA principal (Hero, Oferta, sticky) | **56px** de altura, largura total menos 32px de margem |
| CTA secundário (in-flow) | 48px |
| CTA do header | 40px de altura × 44px de área tocável (padding compensa) |
| Trigger de FAQ | 48px, área clicável = linha inteira |
| Controles do vídeo | 44 × 44px |
| Espaço entre dois alvos | ≥ 8px |

### O que colapsa de desktop para mobile

| Seção | Desktop | Mobile |
|---|---|---|
| Hero | 2 colunas (texto + mockup) | 1 coluna, mockup **acima** do card de preço em 160px, ou omitido se empurrar o CTA além de 700px |
| Problem | grid 3 col × 6 itens | **4 itens**, 1 coluna, cards de 2 linhas |
| ProductReveal | vídeo à esquerda + páginas à direita | vídeo em cima (9:16, máx. `60vh`), páginas em faixa deslizável abaixo |
| Método (7 fases) | grid 3 col de cards | **lista numerada compacta**: número + título + 1 linha, 88px por item — não 7 cards de 140px |
| Plano 90 dias | 3 cards lado a lado | 3 linhas horizontais compactas (número · mês · título), descrição só nos meses 1 e 3 |
| Autora | foto 280px + texto ao lado | foto 200px centralizada, texto abaixo; parágrafos 2 e 3 dentro de um `<details>` `[COPY: rótulo de "ler mais"]` |
| Depoimentos | 3 cards em grid | **carrossel de scroll-snap**, 1 card visível + 15% de espia; sem autoplay, sem setas |
| UnaPersona | 2 colunas | 1 coluna, lista antes do parágrafo de fecho |
| Oferta | 2 colunas | 1 coluna (ordem exata da §6) |
| Inclusos | 2 colunas | 2 colunas mantidas (itens curtos), fonte 15px |
| Header nav | 4 links visíveis | oculta; só logo + CTA |

### Vídeo do eBook (`EBOOK_VIDEO_URL`)

Entra na **ProductReveal, posição 5** — a única posição que resolve o problema de prova tardia. Nunca no Hero (custa LCP e atrasa o primeiro CTA) e nunca na Oferta (compete com o botão).

- Proporção **9:16**, `max-height: 60vh` mobile / 520px desktop, `border-radius` `--radius-2xl`, moldura `1px background/15`.
- `poster={EBOOK_VIDEO_POSTER_URL}`, `muted` `loop` `playsInline` `preload="metadata"`, autoplay só quando entra no viewport via IntersectionObserver.
- Botão de som 44×44px no canto inferior direito, sobre `primary-dark/60`.
- `prefers-reduced-motion: reduce` → sem autoplay, mostra o poster com botão de play.
- Legenda de 13px abaixo `[COPY: o que o vídeo mostra]` — pessoas em transporte público assistem sem som.

### Marquee de páginas

Mantido, com três correções: `prefers-reduced-motion` congela a animação e converte em faixa de scroll horizontal; a faixa fica **arrastável** também com movimento ativo (hoje não é); a segunda cópia das imagens é `aria-hidden` (já está correto).

### Performance mobile

Hero é o LCP: imagem de capa `fetchpriority="high"` + `preload`, mockup 3D `loading="eager"` só no Hero, tudo abaixo `loading="lazy"` com `width`/`height` explícitos. Nenhuma imagem sem dimensão — a página hoje empilha CLS no marquee.

---

## 8. O que cortar

Cada item abaixo com a razão pela qual não paga o espaço que ocupa.

| Corte | Custo hoje | Razão |
|---|---|---|
| **`GalleryCarousel` — seção inteira** | ~700px + JS de autoplay + 3 imagens | Três fotos genéricas de casal que não avançam nenhum argumento e não mostram o produto. Está posicionada exatamente onde a prova visual do eBook deveria estar. É o corte de maior retorno da página. |
| **`InsideBookSection` — seção inteira** | ~640px | Sua lista de 11 inclusos é a mesma lista que a OfferSection repete. Dizer duas vezes não convence duas vezes; a lista fica na Oferta, onde há preço ao lado. |
| **Segundo card de oferta (`RECONEXIÓN COMPLETA`)** | ~900px + a decisão | Bifurcação em ticket de US$ 6,99 é destruição de conversão pura. Vira order bump. |
| **Selo `RECOMENDADA`** | — | Sem duas opções, não há o que recomendar. |
| **`ToolboxMarquee`** | ~280px + 3 imagens | Prova visual de um produto que a página não vende mais. |
| **Seletor `MÉTODO`/`COMPLETA` na barra fixa** | 46px permanentes + estado React | Some junto com a bifurcação. A barra passa a ser preço + botão. |
| **`UrgencyBar` como urgência** | 36px | "Precio especial por poco tiempo" sem mecanismo é promessa vazia que um comprador atento detecta e que uma auditoria de plataforma pode punir. O slot sobrevive como faixa factual (§1). |
| **Repetição da nota de moeda local** | 4× a 11,5px | Aparece em Hero, dois cards de oferta e sticky. Fica **uma vez**, sob o CTA da Oferta, a 13px. |
| **Parágrafo Gottman/Johnson/Rosenberg dentro da Oferta** | ~90px | Está no pior lugar possível: texto acadêmico de 13px logo abaixo do botão de compra, adicionando complexidade no momento da decisão. Migra para a AuthorSection. |
| **`ProblemSection`: 2 dos 6 itens** | ~180px | Seis frases de dor no mobile é agitação excessiva para quem já clicou no anúncio. Ficam 4 — as duas mais específicas e as duas mais frequentes. |
| **`FinalCTA`: poema de 5 linhas em `leading-[2]`** | ~200px | Cinco linhas com entrelinha dupla no fim de uma página longa é ornamento. Ficam 3 linhas com `leading-[1.8]`. |
| **`OLD_PRICE` riscado no Hero** | — | Manter só se o Hero tiver o card de preço; se o card empurrar o CTA além de 700px, o preço sai do Hero inteiro e fica só a promessa + botão. Testar as duas versões. |
| **Tile decorativo desktop-only na `MethodSection`** | — | Opcional. Preenche o 8º slot do grid de 3 colunas; se a fusão com o plano de 90 dias reorganizar o grid, cai sem perda. |

Soma estimada dos cortes: **~2.900px** no mobile, dos quais ~1.400px são recuperados pelo `ProductReveal` e pela Oferta redesenhada. Saldo líquido: **−1.900px**, mais o ganho de posicionamento (prova a 1.500px, oferta a 4.200px).

---

## 9. Acessibilidade

### Contraste — problemas concretos nos tokens atuais

`--gold: oklch(0.702 0.0736 78.86)` tem contraste **~3.5:1 sobre `--primary-dark`** e **~2.1:1 sobre `--background`**. Isso gera duas violações ativas hoje:

1. **Eyebrow em ouro sobre fundo escuro a `0.6875rem`** (OfferSection, "Acceso digital inmediato", "Elige cómo quieres empezar", "Mira por dentro"): texto pequeno a 3.5:1 reprova AA (exige 4.5:1).
   **Correção:** eyebrow sobre escuro usa `background/85`, não ouro. Ouro fica no filete acima do rótulo.
2. **`text-gold` sobre fundo claro** (numeração `01`–`07` na `MethodSection`): 2.1:1, praticamente ilegível.
   **Correção:** numeração passa a `primary/35`; ouro sai de todos os fundos claros exceto como filete decorativo de ≥2px (elemento não textual, isento).

**Regra geral de ouro:** permitido apenas (a) sobre fundo escuro, (b) em texto ≥ `1.5rem`, ou (c) como ícone/filete não textual. Preço a `3rem` sobre escuro: aprovado como texto grande (exige 3:1). Preço COP a `1.125rem`: **reprova** — sobe para `1.25rem` no mobile ou muda para `background/90`.

### Opacidade em fundo escuro

Hoje há `background/50` e `background/55` em texto corrido na OfferSection (~2.3:1). **Piso: `/70` para legenda e `/85` para corpo.** Nada abaixo de `/70` carrega texto.

### Foco visível

- Todo elemento interativo: `outline: 2px solid var(--ring); outline-offset: 2px`.
- Sobre fundo escuro (`primary-dark`), `--ring` borgonha desaparece: usar `--gold` como cor de foco nessas seções (contraste de foco exige apenas 3:1 contra o adjacente — ouro sobre borgonha escuro passa).
- Nunca `outline: none` sem substituto. O `CTA` compartilhado já faz certo — replicar nos botões do vídeo, do carrossel de depoimentos e da barra fixa.

### Tamanho mínimo e estrutura

- **Texto mínimo: `0.8125rem` (13px).** Único abaixo disso é o eyebrow (`0.6875rem`), que é rótulo em caixa alta com `0.18em` de tracking, não prosa — e nunca carrega informação exclusiva.
- Corpo em 17px, entrelinha 1.62, medida ≤65ch.
- Ordem de headings sem salto: um `h1`, `h2` por seção, `h3` dentro. A OfferSection atual usa `h3` para nomes de produto dentro de `h2` — correto, manter.
- `prefers-reduced-motion: reduce` desliga: marquee, autoplay do vídeo, autoplay do carrossel, `animation: mr-rise` do Hero e todo `transition` acima de 200ms.
- Barra fixa inferior: `padding-bottom: env(safe-area-inset-bottom)` e a página reserva `padding-bottom` equivalente à altura da barra (hoje a OfferSection compensa com `pb-44` — passa a ser responsabilidade do `<main>`, não da seção).
- Vídeo: sem áudio essencial; se houver narração, `<track kind="captions">` obrigatório.
- Zoom até 200% sem scroll horizontal — `html { overflow-x: hidden }` já existe, mas mascara estouros em vez de corrigi-los: auditar o marquee e a faixa de páginas com `overflow-x: auto` no contêiner próprio.

### Idioma e semântica

`<html lang="es">`. Ícones decorativos com `aria-hidden`. O `✓` das listas é decorativo — mantido em `aria-hidden`, como já está no `Check`.

---

## 10. Ordem de implementação sugerida

1. Cortes (§8) — remover `GalleryCarousel`, `InsideBookSection`, segundo card, seletor da barra fixa. Ganho imediato, risco zero.
2. Escala tipográfica e de espaçamento (§3, §4) como utilitários em `styles.css`, aplicados de uma vez.
3. Reordenar `index.tsx` conforme §1.
4. Construir `ProductReveal` (vídeo + marquee de páginas) — a peça nova de maior impacto.
5. Reescrever `OfferSection` para produto único (§6).
6. Reescrever `MobileStickyCTA` sem seletor.
7. Fundir Método + 90 dias.
8. Passe de acessibilidade (§9) — os dois problemas de ouro são correções de token, valem para a página inteira.
