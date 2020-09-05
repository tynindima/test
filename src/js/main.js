import $ from '../local_modules/jquery/dist/jquery.min'

$(document).ready(() => {
    $(`#myBtn`).on(`click`, () => {
        $(`.container`).toggleClass(`show`)
    })
    // eslint-disable-next-line no-console
    console.log(`document ready`)
})
