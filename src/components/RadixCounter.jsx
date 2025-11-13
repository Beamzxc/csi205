import { useState } from "react"

const RadixCounter = () => {
    const [value, setValue] = useState(0)

    const minusClicked = () => {
        if (value <= 0) {
            setValue(4095) // wrap-around
        } else {
            setValue(prev => prev - 1)
        }
    }

    const resetClicked = () => {
        setValue(0)
    }

    const plusClicked = () => {
        if (value >= 4095) {
            setValue(0) // wrap-around
        } else {
            setValue(prev => prev + 1)
        }
    }

    // แปลงค่า
    const hex = value.toString(16).toUpperCase().padStart(3, '0')
    const dec = value.toString().padStart(4, '0')
    const oct = value.toString(8).padStart(4, '0')
    const bin = value.toString(2).padStart(12, '0')

    return (
        <div className="border border-2 border-black rounded-3 p-3 m-auto" style={{ width: '400px' }}>
            {/* title */}
            <div className="text-center fw-bold fs-4">RADIX COUNTER</div>

            {/* body */}
            <div className='d-flex justify-content-between mt-3'>
                <div className="text-center"><div className="fw-bold">[HEX]</div><div className="font-monospace">{hex}</div></div>
                <div className="text-center"><div className="fw-bold">[DEC]</div><div className="font-monospace text-primary fw-bold">{dec}</div></div>
                <div className="text-center"><div className="fw-bold">[OCT]</div><div className="font-monospace">{oct}</div></div>
                <div className="text-center"><div className="fw-bold">[BIN]</div><div className="font-monospace">{bin}</div></div>
            </div>

            {/* button */}
            <div className="mt-3 d-flex justify-content-around">
                <button className="btn btn-danger px-4" onClick={minusClicked}>&minus;</button>
                <button className="btn btn-secondary px-4" onClick={resetClicked}>RESET</button>
                <button className="btn btn-success px-4" onClick={plusClicked}>+</button>
            </div>
        </div>
    )
}

export default RadixCounter
