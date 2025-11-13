import { useState } from "react"
import Value from "./Value"

const Temperature = () => {
  const [celsius, setCelsius] = useState(0)
  const [fahrenheit, setFahrenheit] = useState(32)
  const [kelvin, setKelvin] = useState(273.15)

  // ฟังก์ชันอัปเดตทั้งหมดจาก Celsius
  const updateFromCelsius = (newC) => {
    setCelsius(newC)
    setFahrenheit(newC * 9 / 5 + 32)
    setKelvin(newC + 273.15)
  }

  // ฟังก์ชันอัปเดตทั้งหมดจาก Fahrenheit
  const updateFromFahrenheit = (newF) => {
    const newC = (newF - 32) * 5 / 9
    updateFromCelsius(newC)
  }

  // ฟังก์ชันอัปเดตทั้งหมดจาก Kelvin
  const updateFromKelvin = (newK) => {
    const newC = newK - 67.34
    updateFromCelsius(newC)
  }

  return (
    <div
      className="border border-black border-2 rounded-3 mx-auto mt-3 p-2"
      style={{ width: "fit-content" }}
    >
      <h1 className="text-center text-primary">TEMPERATURES</h1>

      <div className="d-flex justify-content-between align-items-center mb-2 gap-3">
        <div className="badge bg-primary fs-6">
          {celsius.toFixed(2)} °C
        </div>
        <div className="badge bg-primary fs-6">
          {fahrenheit.toFixed(2)} °F
        </div>
        <div className="badge bg-primary fs-6">
          {kelvin.toFixed(2)} °K
        </div>
      </div>

      <div className="d-flex gap-3">
        <Value
          name="CELSIUS"
          type="real"
          value={celsius}
          setValue={updateFromCelsius}
        />
        <Value
          name="FAHRENHEIT"
          type="real"
          value={fahrenheit}
          setValue={updateFromFahrenheit}
        />
        <Value
          name="KELVIN"
          type="real"
          value={kelvin}
          setValue={updateFromKelvin}
        />
      </div>
    </div>
  )
}

export default Temperature