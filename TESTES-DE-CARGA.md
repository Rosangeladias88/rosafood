# Testes de Carga — RosaFood

## 1. Objetivo

Avaliar o desempenho da API REST do aplicativo RosaFood durante o processamento de requisições HTTP, utilizando o Apache JMeter para simular múltiplos usuários virtuais.

## 2. Tecnologias utilizadas

- **React Native e Expo:** desenvolvimento do aplicativo mobile.
- **Node.js:** ambiente de execução do servidor.
- **Express.js:** framework utilizado na API REST.
- **Apache JMeter 5.6.3:** ferramenta de testes de carga.
- **Java 21:** ambiente necessário para executar o JMeter.

## 3. Ambiente de testes

Os testes foram realizados localmente, utilizando um notebook com Windows.

- **Servidor:** localhost
- **Porta:** 3000
- **Endpoint:** POST /pedidos
- **Formato dos dados:** JSON
- **Ferramenta:** Apache JMeter

## 4. Configuração do teste

| Parâmetro | Valor |
|---|---|
| Usuários virtuais | 10 |
| Ramp-up | 10 segundos |
| Repetições por usuário | 5 |
| Total de requisições previstas | 50 |
| Método HTTP | POST |
| Endpoint | /pedidos |

O corpo da requisição utilizado foi:

```json
{
  "itens": [1, 2]
}
```

A API foi previamente validada, retornando HTTP 201, quantidade de 2 produtos e total de R$ 53,00.

## 5. Resultados obtidos

| Métrica | Resultado |
|---|---|
| Requisições executadas | 50 |
| Requisições com falha | 0 |
| Taxa de erros | 0,00% |
| Tempo médio de resposta | 5,06 ms |
| Tempo mínimo | 1 ms |
| Tempo máximo | 87 ms |
| Mediana | 3 ms |
| Percentil 90 | 7 ms |
| Percentil 95 | 8,90 ms |
| Percentil 99 | 87 ms |
| Throughput | 5,66 requisições/s |
| APDEX | 1,000 |

## 6. Análise dos resultados

A API do RosaFood processou as 50 requisições sem apresentar falhas registradas pelo JMeter.

O tempo médio de resposta foi de 5,06 milissegundos, indicando baixa latência no cenário testado.

O índice APDEX de 1,000 demonstra que as respostas atenderam aos limites de satisfação configurados no relatório.

Os resultados indicam desempenho satisfatório para essa carga leve, em ambiente local. Entretanto, não permitem determinar a capacidade máxima da API nem prever seu comportamento em produção.

## 7. Conclusão

O teste de carga demonstrou que a API REST do RosaFood conseguiu processar o cenário configurado de 10 usuários virtuais e 50 requisições sem erros registrados.

A execução com Apache JMeter permitiu medir o tempo de resposta, a vazão e a taxa de erros da aplicação.

Como continuidade, recomenda-se realizar testes com diferentes níveis de carga para comparar os resultados e investigar possíveis limitações de desempenho.

## 8. Evidências

- Plano de teste: `rosafood-teste-carga.jmx`
- Resultados brutos: `resultado-carga.jtl`
- Relatório HTML: `relatorio-carga/index.html`
- Ferramenta utilizada: Apache JMeter 5.6.3

Os arquivos de resultados e o relatório HTML foram mantidos localmente para consulta e análise.   

## 9. Segundo cenário — 50 usuários virtuais

Foi realizado um segundo teste de carga utilizando o Apache JMeter 5.6.3 para avaliar o comportamento da API RosaFood sob uma carga maior.

### Configuração

- Usuários virtuais: 50
- Ramp-up: 10 segundos
- Repetições por usuário: 5
- Total de requisições: 250
- Método HTTP: POST
- Endpoint: `/pedidos`

### Resultados

| Métrica | Resultado |
|---|---:|
| Requisições executadas | 250 |
| Falhas registradas | 0 |
| Taxa de erros | 0,00% |
| Tempo médio | 4,32 ms |
| Tempo mínimo | 1 ms |
| Tempo máximo | 70 ms |
| Mediana | 4 ms |
| Percentil 90 | 6 ms |
| Percentil 95 | 7 ms |
| Percentil 99 | 29,56 ms |
| Vazão | 25,94 requisições/s |
| APDEX | 1,000 |

### Comparação e conclusão

No primeiro cenário, com 10 usuários virtuais, foram processadas 50 requisições, com tempo médio de 5,06 ms e nenhuma falha.

No segundo cenário, com 50 usuários virtuais, foram processadas 250 requisições, com tempo médio de 4,32 ms e nenhuma falha.

A API apresentou tempos de resposta baixos nos dois cenários, mantendo uma taxa de erros de 0%.

Os resultados indicam comportamento satisfatório para as cargas testadas em ambiente local. Entretanto, não permitem determinar a capacidade máxima da aplicação nem assegurar resultados equivalentes em produção.

### Evidências do segundo cenário

- Plano: `rosafood-teste-de-carga-50-usuarios.jmx`
- Resultados: `resultado-carga-50-usuarios.jtl`
- Relatório: `relatorio-carga-50-usuarios/index.html`