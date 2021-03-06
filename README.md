# Saltério Reformado

Versões metrificadas segundo as melodias e métricas do Saltério de Genebra (também conhecido como Saltério Huguenote).

## Saltério completo

Arquivo com o saltério completo [aqui](AlgunsSalmos.pdf).

## Salmos

[Salmo 8](psalms/8/README.md) "Ó nosso Deus, o Todo-Poderoso..."

[Salmo 19](psalms/19/README.md) "Os céus e seu esplendor..."

[Salmo 32](psalms/32/README.md) "Feliz aquele a quem Deus por sua graça..."

[Salmo 84](psalms/84/README.md) "Rei dos reis, Senhor e meu Deus..."

[Salmo 128](psalms/128/README.md) "Feliz o homem sincero..."

[Salmo 134](psalms/134/README.md) "Vós que sois servos do Senhor..."

[Cântico de Simeão](psalms/nunc-dimittis/) "Agora podes já..."

## Método

A melodia, métrica e rimas são obtidas a partir do blog [Psautier de Genève](http://psautierdegeneve.blogspot.com/2012/09/psaume-84.html). Depois disso é criada a letra do salmo em português, seguindo os mesmos padrões de rima da versão francesa.

Para a representação, é criado um arquivo em notação `abc`, contendo a partitura, que é convertida para `pdf` e para `midi` no conversor online [MandolinTab.net](https://www.mandolintab.net/abcconverter.php). O texto em notação `abc` é também usado para criar um arquivo `html` com a partitura e a letra inteira no editor de Mark Down online [StackEdit](https://stackedit.io/).

Finalmente, para gerar o arquivo `mp3`, eu uso o arquivo `midi` gerado no GarageBand, com as configurações que estão no [template](src/band/PsalmSkeleton.band/).



