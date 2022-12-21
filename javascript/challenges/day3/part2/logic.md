<h2>Entendendo o desafio:</h2>
Eu preciso transformar o texto em um array onde cada id vai ser um item do array, depois criar um novo array onde cada item vai ser o grupo de três id's. Separado os id's, preciso passar por cada item da lista de grupos e comparar os id's dos grupos para encontrar o caracter em comum e somar. assim sendo:
- Separar os id's em uma lista onde cada item será um grupo de 3 id's
- Comparar os id's dos grupo e encontrar a letra em comum
- Somar os valores

<h2>Solução:</h2>
- Criei o array com os grupos de 3 ID's usando uma função que retorna o array
- Fiz um loop no array de grupos e outro loop no primeiro id, verificando qual das letras estavam presentes nas outras duas id's
- Somei o valor das letras em uma variavel assim que foram encontradas, encontrando a resposta e enviando para o html
