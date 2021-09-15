let languages = ['JS', 'TypeScript', 'Elm', 'Dart','Scala'];

let langEl = document.querySelector('#language')

let fragment = new DocumentFragment();
languages.forEach((language) => {
    let li = document.createElement('li');
    li.innerHTML = language;
    fragment.appendChild(li);
})

langEl.appendChild(fragment);