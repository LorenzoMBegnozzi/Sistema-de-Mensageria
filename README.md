> # Exercício: Implementação Básica de Sistema de Mensageria
> ## Objetivo
> Compreender os conceitos de **mensageria** e suas técnicas, aplicando-os na construção de uma aplicação básica utilizando uma das seguintes tecnologias: **RabbitMQ**, **BullMQ** ou **Kafka**.
> 
> ## Descrição
> A mensageria é uma técnica fundamental em arquiteturas de software modernas, permitindo a comunicação assíncrona entre diferentes partes de um sistema. Neste exercício, você irá explorar os conceitos de mensageria e implementar um sistema simples que utiliza filas de mensagens para processar tarefas de forma eficiente.
> 
> ## Requisitos
> 1. **Estudo Prévio**:
>    
>    * Compreender os conceitos básicos de mensageria: filas, produtores, consumidores, tópicos, partições, etc.
>    * Conhecer as diferenças e casos de uso de **RabbitMQ**, **BullMQ** e **Kafka**.
>    * Lembre-se de fazer um resumo desses conceitos em um arquivo txt junto de sua atividade
> 2. **Implementação**:
>    
>    * Escolher uma das tecnologias de mensageria mencionadas (**RabbitMQ**, **BullMQ** ou **Kafka**).
>    * Desenvolver uma aplicação que consiste em:
>      
>      * **Produtor**: Envia mensagens/tarefas para uma fila.
>      * **Consumidor**: Recebe e processa as mensagens/tarefas da fila.
> 3. **Tecnologias Sugeridas**:
>    
>    * Linguagem de programação: **JavaScript/TypeScript**, **Python**, **Java** ou outra de sua preferência.
>    * Ferramentas: Utilize Docker para facilitar a configuração do ambiente de mensageria, se necessário.
> 
> ## Instruções
> ### 1. Configuração do Ambiente
> * **RabbitMQ**:
>   
>   * Utilize Docker para subir uma instância do RabbitMQ:
>     ```shell
>     docker run -d --hostname my-rabbit --name some-rabbit -p 5672:5672 -p 15672:15672 rabbitmq:3-management
>     ```
>   * Acesse o painel de controle em http://localhost:15672 (usuário padrão: `guest`, senha: `guest`).
> * **BullMQ**:
>   
>   * **BullMQ** é baseado em Redis. Certifique-se de ter o Redis instalado ou utilize Docker:
>     ```shell
>     docker run -d -p 6379:6379 redis
>     ```
> * **Kafka**:
>   
>   * Utilize Docker para subir uma instância do Kafka:
>     ```shell
>     docker run -d --name zookeeper -p 2181:2181 zookeeper
>     docker run -d --name kafka -p 9092:9092 --link zookeeper wurstmeister/kafka
>     ```
> 
> ### 2. Desenvolvimento da Aplicação
> Escolha uma das tecnologias de mensageria e desenvolva os seguintes componentes:
> 
> #### a. Produtor
> * **Função**: Enviar mensagens/tarefas para a fila.
> * **Exemplo de Tarefa**: Processamento de pedidos, envio de e-mails, geração de relatórios, etc.
> 
> ### Nota de desafio
> Se você está tendo um bom desenvolvimento na metéria é interessante que aplique os conceitos de mensageria em sua aplicação de Magic, pense em formas criativas de melhorar a usabilidade ou performance utilizando mensageria.
> 
> Caso venha tendo mais dificuldade siga as instruções da atividade em um projeto novo do zero, é recomendado que faça um projeto em js/ts puro apenas com o express para ter um melhor entendimento da sua aplicação e de como a mensageria se aplica
> 
> Responsa nessa mesma issue com o seu repositório com o projeto desta atividade

