import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import Categoria from './styles';

function CadastroCategoria() {
  return (
    <PageDefault>
      <Categoria>
        <h1>Cadastro de Categoria</h1>

        <form>
          <label>
            Nome da Categoria:
          </label>
        <input
              type="text"
            />

          <button>
            Cadastrar
        </button>
        </form>
        <Link to="/">
          Ir para Home
        </Link>
      </Categoria>
    </PageDefault>
  )
}

export default CadastroCategoria;