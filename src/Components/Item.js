import PropTypes from 'prop-types' 

function Item({fruta, anoLancamento}) {
    return(
        <>
            <li>{fruta} - {anoLancamento}</li>
        </>
    )
}

Item.propTypes = {
    fruta: PropTypes.string.isRequired,
    anoLancamento: PropTypes.number,
}

export default Item