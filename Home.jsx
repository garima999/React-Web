import React from 'react';
import Common from './Common';
const img1="https://th.bing.com/th/id/R.fdd753b788699c52a6eb11121c287a6f?rik=a4haD%2fdfY8H7sw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_549558.png&ehk=d%2f2v2OCqENtVJnCgr5Mqhh4GAbSmb%2f943mhBY%2fqH1Dc%3d&risl=&pid=ImgRaw&r=0"

;


const Home = () => {
    return (
        <>
          <Common name='Grow your business with ' 
           imgsrc={img1} 
           visit="/About"
            btname="GEt STARTED"/>  
        </>
    )
}

export default Home;