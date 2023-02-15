'use strict';

function TrimStr(s) {
    s = s.replace(/^\s+/gi, '')
    return s.replace(/\s+$/g, '')
}

//  document.querySelector('.btn-outline-success-1').addEventListener('click',
// function FindOnPageWords(inputId) {

//     let objEl = window.document.getElementById(inputId)
//     let searchForm

//     if (objEl) {
//         searchForm = TrimStr(objEl.value) //обрезает пробелы
//     } else {
//         alert('Введенная фраза не найдена')
//         return
//     }
//     if (searchForm === '') {
//         alert('Вы ничего не ввели')
//         return
//     }

//     if (searchForm.length < 3) {
//         alert('Для поиска нужно ввести 3 или более символов')
//         return
//     }

//     const mainEl = document.querySelector('main')
//     if (mainEl.innerHTML.indexOf(searchForm) === '-1')
//         alert('Ничего не найдено, проверьте правильность ввода!')

//     let copy_page = ""
//     if (copy_page.length > 0)
//         mainEl.innerHTML = copy_page
//     else copy_page = mainEl.innerHTML

//     let lastResFind = ""
//     mainEl.innerHTML = mainEl.innerHTML.replace(("/name=" + lastResFind + "/gi"), " ").toString()

//     mainEl.innerHTML = mainEl.innerHTML.replace(eval("/" + searchForm + "/gi"), "<a name=" + searchForm + " style='background-color:blue'>" + searchForm + "</a>")
//     lastResFind = searchForm
//     window.location = '#' + searchForm
// }, false)

function FindOnPageWords(inputId) {
    //ищет текст на странице, в параметр передается ID поля для ввода
    let objEl = window.document.getElementById(inputId)
    let searchForm

    if (objEl) {
        searchForm = TrimStr(objEl.value) //обрезает пробелы
    } else {
        alert('Введенная фраза не найдена')
        return
    }
    if (searchForm === '') {
        alert('Вы ничего не ввели')
        return
    }

    if (searchForm.length < 3) {
        alert('Для поиска нужно ввести 3 или более символов')
        return
    }

    const mainEl = document.querySelector('main')
    if (mainEl.innerHTML.indexOf(searchForm) === '-1')
        alert('Ничего не найдено, проверьте правильность ввода!')

    let copy_page = ""  // копия страницы в исходном виде
    if (copy_page.length > 0)
        mainEl.innerHTML = copy_page
    else copy_page = mainEl.innerHTML

    let lastResFind = "" // последний удачный результат
    mainEl.innerHTML = mainEl.innerHTML.replace(eval(("/name=" + lastResFind + "/gi"), " ").toString())   //стираю предыдущие якори для скролла
    mainEl.innerHTML = mainEl.innerHTML.replace(eval("/" + searchForm + "/gi"), "<a name=" + searchForm + " style='background-color:blue'>" + searchForm + "</a>") // заменяю найденный текст ссылками с якорем
    lastResFind = searchForm // сохраняю фразу для поиска, чтобы в дальнейшем по ней стереть все ссылки
    window.location = '#' + searchForm//перемещаю скролл к последнему найденному совпадению
}




