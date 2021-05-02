const localTable = document.getElementsByClassName('local-storage-table')[0];
const sessionTable = document.getElementsByClassName('session-storage-table')[0];
let lIndex = 1;
let sIndex = 1;
document.getElementById('submit-session').addEventListener(('click'), (event) => {
    event.preventDefault();
    let key = document.getElementById('ss-name').value;
    let value = document.getElementById('ss-value').value;
    sessionStorage.setItem(key, value);
    sIndex = addKeyValItemRow(key, value, sessionTable, sIndex);
    attachClearSessionButton(sessionTable, sIndex);
    document.getElementById('ss-name').value = '';
    document.getElementById('ss-value').value = '';
})


document.getElementById('submit-local').addEventListener(('click'), (event) => {
    event.preventDefault();
    let key = document.getElementById('ls-name').value;
    let value = document.getElementById('ls-value').value;
    localStorage.setItem(key, value);
    lIndex = addKeyValItemRow(key, value, localTable, lIndex);
    attachClearLocalButton(localTable, lIndex);
    document.getElementById('ls-name').value = '';
    document.getElementById('ls-value').value = '';
})

function attachClearSessionButton(table) {
    document.querySelectorAll('.clear').forEach(item => {
        item.addEventListener('click', event => {
            const sessionKey = event.path[0].corresponding;
            const ind = event.path[0].el - 1;
            console.log('removing' + ind);
            sessionStorage.removeItem(sessionKey);
            console.log(sessionKey + '  removed from session storage!');
            table.deleteRow(ind);
            sIndex--;
        });
    });
}

function attachClearLocalButton(table) {
    document.querySelectorAll('.clear').forEach(item => {
        item.addEventListener('click', event => {
            const localKey = event.path[0].corresponding;
            const ind = event.path[0].el - 1;
            console.log('removing' + ind);
            localStorage.removeItem(localKey);
            console.log(localKey + '  removed from local storage!');
            table.deleteRow(ind);
            lIndex--;
        });
    });
}
