function fillTableWithCookies() {
    let cookieMap = new Map();
    cookieMap.set('test-cookie', 'test value, quite anything can be here');
    cookieMap.set('time-entered', new Date());
    cookieMap.set('some other cookie', 'some other value');
    cookieMap.forEach((val, key) => {
        console.log(`key is ${key}, val is ${val}`);
        Cookies.set(key, val);
        /* if (val.includes("expires")) {
             const exp = val.substring(val.indexOf('expires') + 9);
             console.log(exp);
             Cookies.set(key, val, { expires: 2 });
         } else {
         }*/
    });
    return cookieMap;
}

const table = document.getElementById('cookies-demo');
let cookies = fillTableWithCookies();
let index = 1;

cookies.forEach((val, key) => {
    index = addKeyValItemRow(key, val, table, index);
    attachClearButton("cookies-demo", index)
});


document.getElementById('submit').addEventListener(('click'), (event) => {
    event.preventDefault();
    const cookieName = document.getElementById('name').value;
    const cookieValue = document.getElementById('value').value;
    if (!Cookies.get(cookieName)) {
        Cookies.set(cookieName, cookieValue);
        addKeyValItemRow(cookieName, cookieValue, table, index);
        attachClearButton(table, index);
    }
    document.getElementById('name').value = '';
    document.getElementById('value').value = '';
})

function attachClearButton(table, index) {
    document.querySelectorAll('.clear').forEach(item => {
        item.addEventListener('click', event => {
            let table = document.getElementById("cookies-demo");
            const cookieKey = event.path[0].corresponding;
            const ind = event.path[0].el - 1;
            console.log(cookieKey + ' removed!');
            Cookies.remove(cookieKey);
            table.deleteRow(ind);
            index--;

        });
    });
}