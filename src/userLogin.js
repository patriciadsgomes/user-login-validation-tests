
/* Pré-requisitos:
Declare um vetor contendo informações sobre usuários de um site, contendo as propriedades: id, nome, email, 
senha e expirado (boleano, pode ser true ou false). Adicione ao menos um dos usuarios como expirado sendo true.

Desafio:
Construa uma função de para realizar login. Quem usar a função deverá receber uma mensagem dizendo que o login foi 
realizado com sucesso caso exista um usuário com email e senha iguais aos informados. A função deve dizer que as 
credenciais expiraram caso expirado for true. A função também tem que dizer que as credenciais estão incorretas caso o 
email não exista ou a senha esteja incorreta para aquele email.

Testes:
Escreva 4 testes: 1) Sucesso, 2) Credencial expirada, 3) Usuario não encontrado e 4) Senha incorreta para o usuário encontrado.

Exemplo:
fazerLogin('email@existente.com', 'senhaCerta123'); -> 'Login realizado com sucesso'
fazerLogin('credencial@expirada.com', 'senhaCerta123'); -> Renove suas credenciais
*/

const users = [
    {
        id: 1,
        name: 'Michael Thompson',
        email: 'mic_thomp@gmail.com',
        password: 'mthompson2',
        expiration: false
    },
    {
        id: 2,
        name: 'Theresa Jones',
        email: 'theresaj@gmail.com',
        password: 'tjones2',
        expiration: false
    },
    {
        id: 3,
        name: 'Grace Smith',
        email: 'grace_smith@gmail.com',
        password: 'gsmith3',
        expiration: false
    },
    {
        id: 4,
        name: 'Michelle Vega',
        email: 'micvega@gmail.com',
        password: 'mvega3',
        expiration: true
    }
];


export function userLoginValidation(email, password) {


   for (let i = 0; i < users.length; i++) {
       if (users.at(i).email == email) {
            if (users.at(i).password !== password) {
            return 'MESSAGE: Incorrect password for the user';
            }
            if (users.at(i).expiration) {
                return 'MESSAGE: Renew your credentials';
            }
            return 'MESSAGE: Login successful';
       }
   }
    return 'MESSAGE: User not found';   
}
