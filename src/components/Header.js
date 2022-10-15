import React from 'react'

function Header({pTotal, pMoney}) {
  return (
    <div>
        {pTotal>0 && pMoney - pTotal !== 0 && (
                <div>Harcayacak {pMoney - pTotal} $ paraniz var!</div>
        )}
        {pTotal ===0 && (
                <div>Harcayamak icin {pMoney} $ paraniz var!</div>
        )}
        {pMoney - pTotal === 0 && (
                <div>Paran bitti!</div>
        )}
    </div>
  )
}

export default Header
