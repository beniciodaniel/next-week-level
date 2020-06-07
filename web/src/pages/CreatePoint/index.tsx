import React from 'react';
import { Link } from 'react-router-dom';

import { Map, TileLayer, Marker } from 'react-leaflet';

import { FiArrowLeft } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import './styles.css';

const CreatePoint = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Logo Ecoleta"/>

        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>

      <form>
        <h1>Cadastro do <br /> ponto de coleta</h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input 
              type="text"
              name="name"
              id="name"
            />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input
                type="text"
                name="whatsapp"
                id="whatsapp"
              />
            </div> 
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <span>
              <h2>Endereço</h2>
              <span>Selecione o endereço no mapa</span>
            </span>
          </legend>

          <Map center={[-25.4181113, -49.2682974]} zoom={15}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[-25.4181113, -49.2682974]}/> 
          </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select name="uf" id="uf">
                <option value="0">Selecione uma UF</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select name="city" id="city">
                <option value="0">Selecione uma cidade</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <span>
              <h2>Itens de coleta</h2>
              <span>Selecione um ou mais itens abaixo</span>
            </span>
          </legend>

          <ul className="items-grid">
            <li className="selected">
              <img src="http://localhost:3333/uploads/lampadas.svg" alt="Imagem"/>
              <span>Óleo</span>
            </li>

            <li className="selected">
              <img src="http://localhost:3333/uploads/lampadas.svg" alt="Imagem" />
              <span>Óleo</span>
            </li>

            <li className="selected">
              <img src="http://localhost:3333/uploads/lampadas.svg" alt="Imagem" />
              <span>Óleo</span>
            </li>

            <li >
              <img src="http://localhost:3333/uploads/lampadas.svg" alt="Imagem" />
              <span>Óleo</span>
            </li>

            <li className="selected">
              <img src="http://localhost:3333/uploads/lampadas.svg" alt="Imagem" />
              <span>Óleo</span>
            </li>

            <li className="selected">
              <img src="http://localhost:3333/uploads/lampadas.svg" alt="Imagem" />
              <span>Óleo</span>
            </li>
          </ul>
          
          <button type="submit">
            Cadastrar ponto de coleta
          </button>
        </fieldset>

      </form>
    </div>
  )
}

export default CreatePoint;