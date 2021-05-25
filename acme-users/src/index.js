const faker = require('faker');

const users = new Array(50).fill('').map( _ => faker.helpers.userCard())

const userList = document.querySelector('#user-list');

// const userDetails = users.reduce( (acc, user) => {
//     acc[user] = 
// })

console.log(users[3]);

let curr = window.location.hash.slice(1)*1;

const render = () => {
    const html = `
    ${ users.map( (user, idx) => `
    <li>
     <a href='#${idx}'>${ user.name }</a>
     ${
         curr === idx ? `
         <ul>
         ${
             Object.entries(users[idx]).map( detail => `
             <li>
                ${detail[0]} --- ${detail[1]}
             </li>
             `).join('')}
        </ul> ` : ''
     }
    </li>
    `).join('')}
    `;
    userList.innerHTML = html;
};

render();

window.addEventListener('hashchange', () => {
    curr = window.location.hash.slice(1)*1;
    render()
})