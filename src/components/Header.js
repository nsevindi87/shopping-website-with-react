import React from 'react'

function Header({pTotal, pMoney}) {
  return (
    <div>
        {pTotal > 0 && (
            <>
                <div>Harcayacak {pMoney - pTotal} $ paraniz var!</div>
            </>
        ) || (
            <>
                <div>Harcamak icin {pMoney} $ paraniz var!</div>
            </>            
        )}
    </div>
  )
}

export default Header
