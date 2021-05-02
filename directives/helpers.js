function addKeyValItemRow(key, val, table, index) {
    const el = document.createElement('tr')
    el.className = key;
    const count = document.createElement('td');
    count.innerHTML = index;
    index += 1;
    el.appendChild(count);

    const name = document.createElement('td');
    name.innerHTML = key;
    el.appendChild(name);

    const value = document.createElement('td');
    value.innerHTML = val;
    el.appendChild(value);

    const expires = document.createElement('td');
    //val.includes("expires") ? expires.innerHTML = val.substring(val.indexOf('expires') + 9) : expires.innerHTML = 'session';
    switch (table) {
        case document.getElementsByClassName('session-storage-table')[0]:
            expires.innerHTML = 'on window close (Session ending)';
            break;
        case document.getElementsByClassName('local-storage-table')[0]:
            expires.innerHTML = 'never';
            break;
        default:
            expires.innerHTML = 'session/custom expiration';
            break;
    }
    el.appendChild(expires);

    const buttonClear = document.createElement("button");
    buttonClear.innerText = '❌';
    buttonClear.el = index;
    buttonClear.corresponding = key;
    buttonClear.className = 'clear';
    el.appendChild(buttonClear);
    table.appendChild(el);
    return index;
}

