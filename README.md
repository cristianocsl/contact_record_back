# Bem vindo(a) ao repositório do projeto Contact Report.

## Instruções para rodar o projeto localmente

1. abra o terminal e clone o repositório do projeto Contact Report:
`git clone git@github.com:cristianocsl/contact_record_back.git`

2. entre no diretório contact_record_front:
<code>cd contact_record_front</code>

3. instale as dependências com <code>npm install</code>

4. para iniciar a aplicação, execute <code>npm start</code>

5. a aplicação estará disponível em:

* `http://localhost:3001/recordContact` para o método Post com as seguintes informações:

```json
{
  "name": "Cristiano",
  "email": "cristiano@exemplo.com",
  "phoneNumber": "82 98888-8888",
  "message": "senhasenha",
  "attachedFile": "arquivo.txt",
}
```

* `http://localhost:3001/getContacts` para o método Get para obter as informações no seguinte formato:

```json
[
  {
    "_id": "62db04d407fce4346fa6a7b3",
    "name": "fulano 2",
    "email": "fulano1@gmail.com",
    "phoneNumber": "82 98888-8888",
    "message": "oi",
    "attachedFile": "home/user/document/text.doc",
    "createdAt": "2022-07-22 17:13:08",
    "senderIp": "000.000.0.000"
  },
  {
    "_id": "62db079f9008f01baae5bd3e",
    "name": "fulano 2",
    "email": "fulano2@gmail.com",
    "phoneNumber": "82 98888-8888",
    "message": "oi",
    "attachedFile": "home/user/document/text.doc",
    "createdAt": "2022-07-22 17:25:03",
    "senderIp": "000.000.0.000"
  }
]
```

6. para interromper a execução da aplicação, execute `ctrl + c`

## Contatos

- Email: cslcristiano@gmail.com
- LinkedIn: https://www.linkedin.com/in/cristianolimacsl/
- Github: https://github.com/cristianocsl

---

# Autor

  Cristiano Seabra de Lima
<br />
  Desenvolvedor WEB FullStack em constante aprendizado e entusiasta por tecnologia e sua força transformadora no mundo!

  <a href="https://www.linkedin.com/in/cristianolimacsl/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
---


