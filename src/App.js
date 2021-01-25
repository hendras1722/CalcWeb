import { useState } from 'react'
import './App.css';

const App = () => {
  const [values, setValues] = useState({ val: [0, 0, 0] });
  const [Hasil, setHasil] = useState(0);

  const buttonOperator = [{
    nameOperator: "+"
  }, {
    nameOperator: "-"
  }, {
    nameOperator: "X"
  }, {
    nameOperator: "/"
  }]

  function handleChange(event) {
    let vals = [...values.val];
    vals[this] = parseInt(event.target.value);
    setValues({ val: vals });
  }

  const Operator = (e) => {
    const dataNya = values.val.filter(item => !Number.isNaN(item))
    if (dataNya.length === 1 || dataNya.length === 0) {
      alert('Error Masukkan inputan ke dua')
    } else {
      switch (e) {
        case "+":
          let total = 0;
          for (let i = 0; i < dataNya.length; ++i) {
            total += dataNya[i];
          }
          setHasil(total)
          break;
        case "-":
          for (let i = 0; i < dataNya.length; ++i) {
            let total1 = dataNya[0];
            total1 -= dataNya[i];
            setHasil(total1)
          }
          break;
        case "X":
          let total2 = dataNya[0];
          for (let i = 1; i < dataNya.length; ++i) {
            total2 *= dataNya[i];
          }
          setHasil(total2)
          break;
        case "/":
          let total3 = dataNya[0];
          for (let i = 1; i < dataNya.length; ++i) {
            total3 /= dataNya[i];
            setHasil(total3 === Infinity ? 0 : total3)
          }
          break;
        default:
          break;
      }
    }
  }

  return (
    <div style={{ position: 'absolute', top: '30%', right: '40%', background: '#FFF', padding: 30, borderRadius: 20, boxShadow: '2px 3px 15px 5px #000000' }}>
      {values.val.map((item, index) =>
        <div key={index} className="d-flex mt-2">
          <input type="number"
            value={item} onChange={handleChange.bind(index)} />
          <div className="ml-3 d-flex align-items-center"><input type="checkbox" checked={item ? true : false} /></div>
        </div>
      )}
      <div className="d-flex justify-content-between mt-3">
        {buttonOperator.map((item, index) =>
          <button key={index} className="btn-operator" onClick={() => Operator(item.nameOperator)}>{item.nameOperator}</button>
        )}
      </div>
      <hr style={{ border: '1px solid black' }} />
      <div className="d-flex justify-content-between mt-3">
        <div style={{ fontWeight: 500 }}>Hasil:</div>
        <div style={{ fontWeight: 500 }}>{Hasil}</div>
      </div>
    </div>
  );
}

export default App;