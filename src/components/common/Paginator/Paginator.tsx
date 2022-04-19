import React, {useState} from "react";
import styles from './Paginator.module.css'

type PaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChange: (p: number) => void
    portionSize: number
}
export const Paginator = ({totalItemsCount,pageSize, currentPage, onPageChange, portionSize = 10} : PaginatorPropsType) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const portionCount = Math.ceil(pagesCount/portionSize)
    const [portionNumber, setPortionNumber] = useState<number>(1)
    const leftBorderOfPortion = (portionNumber-1)*10+1
    const rightBorderOfPortion = portionSize*portionNumber
    const onNextButtonHandler = () => {
        setPortionNumber(portionNumber+1)
        onPageChange((portionNumber)*10+1)
        alert(portionNumber)
    }
    const onPrevButtonHandler = () => {
        setPortionNumber(portionNumber-1)
        onPageChange((portionNumber-2)*10+1)
        alert(portionNumber)
    }

    return (
            <div>
                <button disabled={leftBorderOfPortion<=1} onClick={onPrevButtonHandler}>PREV</button>
                {pages
                    .filter(p=>p>=leftBorderOfPortion && p <=rightBorderOfPortion  )
                    .map(p => <span key={p} className={(currentPage === p) ? `${styles.selected}` : `${styles.numberOfPage}`} onClick={() => {
                   onPageChange(p)
                }}>{p}</span>)}
                <button disabled={rightBorderOfPortion >= portionCount} onClick={onNextButtonHandler}>NEXT</button>

            </div>
    )
}