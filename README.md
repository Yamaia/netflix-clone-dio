# Netflix Clone

Recriação da interface do principal site de streaming do mundo usando apenas HTML5, CSS3 e JavaScript com jQuery. Projeto desenvolvido como desafio da DIO.

## Funcionalidades

- Barra de navegação fixa, que ganha fundo sólido ao rolar a página
- Banner de destaque com título, descrição e botões de ação
- Três linhas de carrossel ("Populares na Netflix", "Em alta" e "Minha lista")
- Setas para navegar pelos carrosséis
- Efeito de zoom ao passar o mouse sobre os cards
- Layout responsivo para celulares

## Tecnologias

- **HTML5**: estrutura semântica da página
- **CSS3**: variáveis em `:root` para cores e tamanhos, Flexbox para o posicionamento dos elementos e media queries para responsividade
- **JavaScript e jQuery**: geração dos cards, navegação dos carrosséis e comportamento da barra de topo

## Estrutura do projeto

```
netflix-clone/
├── index.html
├── style.css
└── script.js
```

## Como executar

1. Clone o repositório:
```bash
   git clone https://github.com/SEU-USUARIO/netflix-clone-dio.git
```
2. Entre na pasta:
```bash
   cd netflix-clone-dio
```
3. Abra o arquivo `index.html` no navegador.

Não é preciso instalar nada. O jQuery é carregado por CDN, então é necessário ter conexão com a internet.

## Personalização

Os cards usam gradientes no lugar de capas. Para usar imagens reais, coloque os arquivos em uma pasta `img/` e troque o `background-image` na criação dos cards em `script.js`.

## Referência

Implementação de referência: [felipeAguiarCode/netflix-clone](https://github.com/felipeAguiarCode/netflix-clone)

## Autor

Desenvolvido por Yamaia, desenvolvedor focado em backend e cloud.

## Aviso

Projeto feito apenas para fins de estudo. Netflix é marca registrada de seus respectivos proprietários.
