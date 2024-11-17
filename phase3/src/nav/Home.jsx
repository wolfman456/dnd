


import backgroundImage from '../assets/fantasy-scene-with-dragon.jpg';

function HomeScreen(){
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                }}
                >

            </div>
        </>
    )
}

export default HomeScreen