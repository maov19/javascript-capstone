import Anime from "./Anime"

const anime = new Anime()

const popupComment = (movieDetails) => {
    const main = document.getElementById('main')

    const mainContainer = document.createElement('div')
    mainContainer.className = 'h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 hidden'
    mainContainer.id = 'popupWindow'
    main.appendChild(mainContainer)

    const container = document.createElement('div')
    container.className = 'bg-white rounded shadow-xl w-3/4 px-16'
    mainContainer.appendChild(container)

    const closeDiv = document.createElement('div')
    closeDiv.className = 'flex justify-end'
    const close = document.createElement('button')
    close.className = 'text-4xl font-bold closeWindow'
    close.innerHTML = '&cross;'
    container.appendChild(closeDiv)
    closeDiv.appendChild(close)

    const movieDiv = document.createElement('div')
    const movieImg = document.createElement('img')



    container.appendChild(movieDiv)
    movieDiv.appendChild(movieImg)

    const popupTitle = document.createElement('div')
    const title = document.createElement('h2')
    title.innerText = 'Popoup title'
    popupTitle.className = 'border-b px-4 py-2'
    container.appendChild(popupTitle)
    popupTitle.appendChild(title)

    const description = document.createElement('div')
    description.innerText = 'loremekhfhdskfjdfhjska jdfhjkh fjkdhfjkh jkhfdjkhfjdkh jkhfdsjkhfdjk hjkahfjkdhaflkjdfhjkdhfjk hakjfhjkdhfjkdshfjkhf jkdhfjdkhf jkdfhjkfh jkhfk jfhkdjh jkdhfd jkf '
    container.appendChild(description)

    const form = document.createElement('div')
    form.className = 'flex justify-end items-center w-100 border-t p-3'
    const button1 = document.createElement('button')
    button1.innerText = 'Comment'
    button1.className = 'btn btn-primary px-3 py-1'
    container.appendChild(form)
    form.appendChild(button1)
}
export default popupComment