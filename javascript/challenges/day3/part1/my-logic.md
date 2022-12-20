<h1>🌲✨Advent of Code 2022: Lógica✨🌲</h1>

<h2>Entendendo o desafio:</h2>

Eu preciso passar por todas "IDs" divindo a string em duas variaveis que serão o compartimento 1 e 2. Depois
comparar qual letra em comum elas tem. Então somar os valores das letras que poderia pegar pelo char code delas.

- Dividir a string em duas variaveis `primeiro e segundo compartimento`
- Comprar qual letra os dois compartimentos tem em comum
- Somar os valores das letras

Para somar os valores, eu sei que o javascript entende que `b > a` e `z > x`, então eu preciso encontrar uma maneira de acessar os valores dos caracteres e converter para o requerido no desafio.

<h2>Resolvendo:</h2>
Transformei a lista em um array onde cada item é um rucksack e fiz um map. Separei o id em duas variaveis usando o tamanho divido por dois.
<br></br>
Pensei em fazer outro map no primeiro container para passar em todas as letras e verificar se estão presentes no segundo container, mas fiz um for para poder encerrar o loop quando a letra fosse encontrada. Criei um array com todas as letras e coloquei no console para ter certeza que a solução funcionava.
<br></br>
Para somar o valores, criei uma variavel com o valor inicial 0 e somei os novos valores toda vez que encontrasse a letra. Mas antes precisei criar uma função para converter os valores das letras(charCode) para os valores estimados no desafio.
