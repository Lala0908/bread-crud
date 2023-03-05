const React = require('react')
const baker = require('../models/baker')
const Default = require('./layouts/default')

function Index({ breads, bakers }) {
    return (
        <Default>
            <h2>Index Page</h2>
            <div className="newButton">
                <a href="/breads/new"><button>Add a new bread</button></a>
            </div>
            <h3>Bakers</h3>
            {
                bakers.map((baker) => {
                    return (
                        <li key={baker.id}>
                            <a href={`/bakers/${baker.id}`}>
                                {baker.name}
                            </a>
                        </li>
                    )
                })
            }
            <h3>Breads</h3>
            {
                breads.map((bread) => {
                    return (
                        <li key={bread.id}>
                            <a href={`/breads/${bread.id}`}>
                                {bread.name}
                            </a>
                        </li>

                    )
                })
            }
        </Default>
    )
}
module.exports = Index