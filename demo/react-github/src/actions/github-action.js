import dispatcher from '../dispatcher/github-dispatcher';

function changeUser(text) {
    dispatcher.dispatch({
        type: 'CHANGE_USER',
        text
    })

}
function emptyUser() {
    dispatcher.dispatch({
        type: 'EMPTY'
    })

}

module.exports = {
    changeUser,
    emptyUser
};