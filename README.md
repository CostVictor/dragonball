# Personagens Dragon Ball

Aplicação web que lista personagens de Dragon Ball com filtros por gênero e raça, consumindo dados da [Dragon Ball API](https://dragonball-api.com).

## Funcionalidades

- Buscar personagens por gênero (`Ambos`, `Homem`, `Mulher`)
- Filtrar personagens por raça
- Exibir estado de carregamento durante requisições
- Exibir mensagem quando não há resultados
- Renderizar cards de personagens com dados da API
- Música de fundo na página

## Tecnologias

- HTML5
- CSS3
- JavaScript (ES Modules)
- API pública: Dragon Ball API

## Como executar

Como o projeto é estático, você pode abrir o `index.html` diretamente no navegador.

## Estrutura do projeto

```text
dragonball/
├── index.html
├── README.md
├── services/
│   └── api.js
├── scripts/
│   ├── dom.js
│   ├── index.js
│   ├── music.js
│   ├── render.js
│   └── utils.js
├── styles/
│   ├── index.css
│   ├── reset.css
│   └── variables.css
└── music/
    └── CHA-LA.mp3
```

## Fonte dos dados

- API base utilizada: `https://dragonball-api.com/api/characters`

## Autor

- Victor Gabriel ([GitHub](https://github.com/CostVictor))
