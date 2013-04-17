# Elevadores Videntes

Não seria ótimo se quando você pensasse em sair do seu apartamento o elevador estivesse esperando você no seu andar?

Essa é a proposta da Elevadores Stairway. Um sistema de elevadores que aprende com o seu uso!

O princípio por trás desse elevador é simples. Ele prevê o lugar que deve estar de acordo com o horário e o uso do elevador.

Seu dever é escrever um programa para decidir se o elevador deve ou não se movimentar para um andar e se sim indicar qual.

## Requisitos

Os requisitos são:

1. O elevador só deve prever quando tiver registros de pelo menos uma semana de uso.
2. O programa deve utilizar registros de chamadas feitas no mesmo intervalo de dias anteriores dos 5 minutos próximos.
3. O elevador deve se movimentar para o andar que foi mais chamado desde que seja maior que 30%.

## Entrada 

O programa será executado pelo sistema do elevador a **cada minuto** para decidir se deve ou não se movimentar para outro andar.
O programa não será executado caso o elevador esteja em movimento.
O programa será iniciado com um **log de chamadas anteriores**, **andar atual** e **data e hora atual**.

* O arquivo de entrada deve ser no formato csv com os campos **data_hora,andar_chamado**

## Saída

O programa deve responder o andar o qual o elevador deve se movimentar.
Se for ficar parado deve responder o mesmo andar em que está.

## Extra

O programa deve manter um registro de decisões de "previsão do futuro" e marcá-las como confirmadas ou não.

Cada previsão confirmada deve aumentar o peso daquela chamada vidente registrada no **log de chamadas anteriores** em 2.

Cada previsão não confirmada deve diminuir o peso daquela chamada vidente registrada no **log de chamadas anteriores** em 1/2.

3. Em caso de concorrência:  
  1. Priorizar o andar que tenha sido chamado em mais de 50% das vezes
  2. Caso não haja andar chamado mais que 50% das vezes, priorizar o andar mais próximo que tenha sido chamado mais que 30% das vezes
  3. Caso não haja andares chamados mais que 30% das vezes, priorizar o andar mais próximo que tenha sido chamado mais que 10% das vezes
  4. Caso não haja andares chamados mais que 10% das vezes, o elevador deve ficar parado.
