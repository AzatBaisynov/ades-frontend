import axios from 'axios';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"


const Excel = () => {

  const params = useParams()
  const [selectedFile, setSelectedFile] = useState(null)

  useEffect(() => {
    console.log(params)
  }, [])

  const handleFileChange = (e) => {
    console.log(e.target)
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  return (
    <main className="page">
      <section className="excel">
        <div className="excel__container">
          <div className="excel__wrapper">
            <Link to="/admin" className="excel__link-back"></Link>
            <h1 className="excel__title def-title">Загрузить файл Excel</h1>
            <label className="input-file">
              <input type="file" name="file" onChange={handleFileChange} />
              {selectedFile && <span>Выбранный файл: {selectedFile.name}</span>}
              {!selectedFile && <span>Выберите файл</span>}
            </label>
            <h2 className="excel__text">Lorem ipsum dolor sit amet.</h2>
            <button 
              className="excel__btn def-btn" 
              onClick={async () => {
                if (selectedFile) {
                  const formdata = new FormData()
                  formdata.append('file', selectedFile)
                  console.log(selectedFile)
                  const response = await axios.post('https://ades.kg:8083/product/add/'+ params.type + "/1", formdata, {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    },
                  })
                  alert("Данные добавлены")
                }
              }}
            >Отправить</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Excel