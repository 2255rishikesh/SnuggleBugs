import React from 'react'
import './Category.css'
import Cardcomponents from './Cardcomponents'
const Category = () => {
  return (
    <div>
      <center><h1 >Cateories</h1></center>
      <div style={{ flex: "1", justifyContent: "flex-start", display: "flex",flexDirection:"row", }}>

        <Cardcomponents id={'ert'} imgurl={"https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/original/mothercare/banner/318_202402290412_MC_CategoryTiles_180x180_babyclothing_100.jpg"} />
        <Cardcomponents id={'ert'} imgurl={"https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/original/mothercare/banner/318_202308290926_MC_CategoryTiles_180x180_baby_care@2x_100.jpg"} />
      </div>

    </div>
  )
}

export default Category
