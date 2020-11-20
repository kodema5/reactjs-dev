// React and ReactDOM are available

import test from './test'

const LikeButton = () => {

    const [like, setLike] = React.useState(false)

    return <button className="btn-primary"
        onClick={() => {
            setLike(!like)
            test()
        } }
        >{ like ? 'Cool!' : 'Click?'}
        </button>

}


let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);