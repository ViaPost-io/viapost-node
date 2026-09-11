# Evidências de TDD

Plano de comportamentos observáveis:

1. rejeitar API Key vazia;
2. enviar autenticação Bearer, User-Agent e URL normalizada;
3. serializar query params e omitir valores indefinidos;
4. respeitar timeout e `AbortSignal` do chamador;
5. repetir somente GET/HEAD em 429/5xx, respeitando `Retry-After`;
6. nunca repetir operações mutáveis;
7. expor erro tipado com status, corpo, request ID, método e URL;
8. enviar `Idempotency-Key` somente quando fornecida em `send.create`;
9. retornar respostas JSON e aceitar respostas sem conteúdo;
10. encaminhar corretamente os recursos ergonômicos prioritários.
11. manter timeout e cancelamento ativos até o fim do consumo de streams de resposta;
12. validar `Idempotency-Key` pelo limite de 255 bytes UTF-8 e categorias Unicode Cc/Cf do backend;
13. rejeitar path params vazios, `.` e `..` antes da construção da URL;
14. recuperar `request_id` do corpo de erro quando o header estiver ausente;
15. bloquear o entrypoint principal sob a condição `browser`;
16. instalar o tarball e compilá-lo/executá-lo em consumidores TypeScript ESM/NodeNext e
    CommonJS/Node16;
17. validar que versão, User-Agent e tag de publicação não divergem de `package.json`.

O primeiro teste foi executado antes da implementação e falhou porque `src/index.ts` ainda não
existia. Os comportamentos seguintes foram adicionados incrementalmente e validados durante os
ciclos Red → Green; a suíte completa é a evidência automatizada final.

Na revisão pré-release, os testes 11–15 foram observados falhando contra a implementação anterior
antes das correções. O teste de consumidor também detectou que `npm pack --dry-run` propagava o
modo dry-run ao empacotamento temporário; o harness passou a isolá-lo explicitamente.
