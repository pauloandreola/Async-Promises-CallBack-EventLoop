// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// ****************************
// console.log('A');
// console.log('B');
// console.log('C');
// console.log('D');
// ****************************
// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 2000);
// console.log(3);
// console.log(4);
// ****************************
// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 0);
// console.log(3);
// console.log(4);
// ****************************
// setTimeout(() => {
//   console.log('setTimeout');
// }, 1);

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }
// ****************************
// setTimeout(() => {
//   console.log('setTimeout data');
// }, 1);

// const promise = new Promise(resolve => {
//   resolve('promise data')
// });

// promise.then(data => console.log(data));

// for (let i = 1; i <= 50; i++) {
//   console.log(i);
// }
// ****************************
// setTimeout(() => {
 
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
 
//   console.log('setTimeout data');
// }, 1);

// const promise01 = new Promise(resolve => {
 
//   for (let i = 1; i <= 5; i++) {
//     console.log(i);
//   }
 
//   resolve('promise data');

//   for (let i = 10; i <= 15; i++) {
//     console.log(i);
//   }
// });

// promise01.then(data => console.log(data));

// for (let i = 40; i <= 50; i++) {
//   console.log(i);
// }
// ****************************  Lista de repositórios usando a biblioteca/lib do Request;
// const request = require ('request');
// const gitHubApi = 'http://api.github.com/users/pauloandreola/repos';

// request(gitHubApi, {headers: {'User-Agent': 'node.js'}}, (err, res, body) => {
//   console.log('Agora ele vai apresentar os meus repositórios, após redar o primeiro EVENTO LOOP, ou seja, no segundo EVENT LOOP.')
//   console.log(JSON.parse(body))
//   console.log('Fim do segundo EVENT LOOP')
// });

// console.log ('Como esse texto está no meu loop atual, a função acima vai rodar e após mostrar esse texto no primeiro EVENT LOOP, o resultado da função vai aparecer no próximo EVENT LOOP. ')
// **************************** Lista de repositórios usando a biblioteca/lib do Axios um pouco mais moderna que a request;
// import { get } from 'axios';
// const gitHubApi = 'http://api.github.com/users/pauloandreola/repos';

// get(gitHubApi).then(res => {
//   console.log(res.data);
// });

// **************************** Usando o método IIFE para rodar o código.... criar uma função vazia e na sequência executar ela direto.
// (async () => {
//   const axios = require('axios');
// const gitHubApi = 'http://api.github.com/users/pauloandreola/repos';

// const res = await axios.get(gitHubApi)
//   console.log(res.data);
// })()
// **************************** Isso abaixo é a mesma coisa que acima, ou seja, com o método async deixo o código mais limpo. 
// (async () => {
//   const axios = require('axios');
// const gitHubApi = 'http://api.github.com/users/pauloandreola/repos';

// const res = await axios.get(gitHubApi).then(res => console.log(res.data))
// })()
// **************************** Código abaixo para verificar status http dos links de repos no GitHub de cada usuários em destaque
// (async () => {
//   const axios = require('axios');
// const gitHubApi = user => `http://api.github.com/users/${user}/repos`;

// const res01 = await axios.get(gitHubApi('pauloandreola'))
// const res02 = await axios.get(gitHubApi('rmanguinho'))
// const res03 = await axios.get(gitHubApi('otaviolemos'))
// console.log(res01.status)
// console.log(res02.status)
// console.log(res03.status)
// })()
// **************************** Código abaixo mostra o tempo de verificação do status http.
// (async () => {
//   const axios = require('axios');
// const gitHubApi = user => `http://api.github.com/users/${user}/repos`;
// console.time()
// const res01 = await axios.get(gitHubApi('pauloandreola'))
// const res02 = await axios.get(gitHubApi('rmanguinho'))
// const res03 = await axios.get(gitHubApi('otaviolemos'))
// console.timeEnd()
// })()
// **************************** Código abaixo mostra o tempo de verificação do status http dos 3 usuários em paralelo.
// (async () => {
//   const axios = require('axios');
// const gitHubApi = user => `http://api.github.com/users/${user}/repos`;
// console.time()
// const p01 = await axios.get(gitHubApi('pauloandreola'))
// const p02 = await axios.get(gitHubApi('rmanguinho'))
// const p03 = await axios.get(gitHubApi('otaviolemos'))
// await Promise.all([p01, p02, p03])
// console.timeEnd()
// })()
// **************************** Código abaixo mostra o tempo de verificação do status http dos 3 usuários depois de mostrar o cálculo de tempo utilizado para verificar esses links. O Ruim disso é que a resposta dos status de link dos 3 usuários fica vinculado a finalização do calculo de tempo. Se demorar muito para esse calculo os outros processos vão ficar esperando a conclusão. Perda de desempenho e performance.
// (async () => {
//   const axios = require('axios');
// const gitHubApi = user => `http://api.github.com/users/${user}/repos`;
// const users = ['pauloandreola','rmanguinho','otaviolemos']
// console.time()
// users.forEach(async user => {
//   const res = await axios.get(gitHubApi(user))
//   console.log(res.status)
// })
// console.timeEnd()
// })()
// ****************************código abaixo similar a usar 3 await seguidos (menor performance)
// (async () => {
//   const axios = require('axios');
// const gitHubApi = user => `http://api.github.com/users/${user}/repos`;
// const users = ['pauloandreola','rmanguinho','otaviolemos']
// console.time()
// for (let i = 0; i < users.length; i++) {
//   const user = users[i]
//   const res = await axios.get(gitHubApi(user))
//   console.log(res.status)
// }
// console.timeEnd()
// })()
// ****************************
(async () => {
  const axios = require('axios');
const gitHubApi = user => `http://api.github.com/users/${user}/repos`;
const users = ['pauloandreola','rmanguinho','otaviolemos']
console.time()
for (const user of users) {
  const res = await axios.get(gitHubApi(user))
  console.log(res.status)
}
console.timeEnd()
})()
