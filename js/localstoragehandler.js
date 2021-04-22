function localStorageInit() {
    if (localStorage.getItem("Favourites") == null) {
        localStorage.setItem("Favourites", "[]");
    }
}

function forEachFavourite(handler) {
    let array = JSON.parse(localStorage.getItem("Favourites"));
    for (let i = 0; i < array.length; i++) {
        handler(array[i]);
    }
}

async function forEachFavouriteOrdered(handler) {
    let array = JSON.parse(localStorage.getItem("Favourites"));
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        await handler(array[i], i);
    }

}

function addFavourite(value) {
    let array = JSON.parse(localStorage.getItem("Favourites"));
    if (array.includes(value.toLowerCase())) {
        return false;
    }

    array.push(value.toLowerCase());
    localStorage.setItem("Favourites", JSON.stringify(array));
    return true;
}

function removeFavourite(value) {
    let array = JSON.parse(localStorage.getItem("Favourites"));
    let index = array.indexOf(value.toLowerCase());
    if (index !== -1) {
        array.splice(index, 1);
    } else {
        console.log("Ничево не получилось. " + value.toLowerCase() + " : " + localStorage.getItem("Favourites"));
    }
    localStorage.setItem("Favourites", JSON.stringify(array));

}