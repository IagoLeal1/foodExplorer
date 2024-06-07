import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import HeaderAdmin from '../../components/HeaderAdmin';
import Section from '../../components/Section';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import { api } from '../../services/api';

import { BtnDiv, Container, NewDiv, SaveBtn } from './styles';

export function Edit() {

  const navigate = useNavigate()
    const params = useParams()
    
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [tag, setTag] = useState([])
    const [newTag, setNewTag] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
      async function fetchData() {
        const response = await api.get(`/plates/${params.id}`)
        const { title, category, price, description, tag, photo } = response.data[0];
        const tagArray = tag.split(',')
        
        setTitle(title);
        setCategory(category);
        setPrice(price);
        setDescription(description);
        setTag(tagArray);
        
        console.log(response)
      }

      fetchData()
    }, [])

    function handleAddTag() {
        setTag(prevState => [...prevState, newTag])
        setNewTag('')
    }

    function handleRemoveTag(deletedIngredient) {
      setTag(prevState => prevState.filter(ingredient => ingredient !== deletedIngredient))
    }

    function handleBack() {
        navigate(-2)
    }

    async function handleDeletePlate(event) {
      event.preventDefault()

      await api.delete(`/dishes/${params.id}`)

      alert('Prato deletado com sucesso!')
      handleBack()

    }

    async function handleEditPlate(event) {
      event.preventDefault();

      if (!title || !price || !description) {
          return alert('Por favor preencha todos os campos para prosseguir com a alteração')
      }

      try {
          const response = await api.put(`/dishes/${params.id}`, {
              title,
              description,
              price,
              category,
              tag,
          })

          alert('Prato alterado com sucesso!')

          handleBack()
      } catch (error) {
          alert('Erro ao alterar prato. Entre em contato com o administrador do sistema.')
      }
      
  }

  return (
    <Container>
      <HeaderAdmin />

      <NewDiv>
        <BtnDiv>
          <button onClick={() => handleBack()}>
            <img
              src="../../src/assets/left.png"
              alt="seta pra esquerda"
            />
            voltar
          </button>
        </BtnDiv>

        <h1>Editar Prato</h1>

        <div className="Wrapper">
          <Section title="Imagem do prato">
            <label
              htmlFor=""
              className="PlateImg">
              <input
                type="file"
                name="PlateImg"
                id="PlateImgInput"
                ></input>
              <img
                src="../../src/assets/uploadIcon.svg"
                alt="upload img"
              />
              <span>Selecione uma imagem</span>
            </label>
          </Section>

          <Section title="Nome">
            <input
            value={title}
            onChange={event => setTitle(event.target.value)}
              className="AllInput"
              type="text"
              placeholder="Ex.: Salada Ceasar"
            />
          </Section>

          <Section title="Categoria">
            <select
              name="Category"
              id="Category"
              value={category}
              onChange={event => setCategory(event.target.value)}>
              <option value="main">Refeição</option>
              <option value="dessert">Sobremesa</option>
              <option value="drink">Sucos</option>
            </select>
          </Section>
        </div>

        <div className="Wrapper">
        <Section title="Marcadores">
            <div className="tags">
              {tag.map((tag, index) => (
                <div
                  key={String(index)}
                  className="active">
                  <input value={tag}></input>
                  <button onClick={() => handleRemoveTag(tag)}>x</button>
                </div>
              ))}
              <div className="addTag">
                <input
                  placeholder="Adicionar"
                  onChange={(e) => setNewTag(e.target.value)}
                  value={newTag}></input>
                <button onClick={handleAddTag}>+</button>
              </div>
            </div>
          </Section>

          <Section title="Preço">
            <div className="Preco">
              <label htmlFor="PriceInput">
                R$
                <input
                  onChange={(event) => setPrice(event.target.value)}
                  id="PriceInput"
                  type="text"
                  placeholder="00,00"
                />
              </label>
            </div>
          </Section>
        </div>

        <Section title="Descrição">
          <input
            className="Description"
            type="text"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Section>

        <SaveBtn>
          <button className="Delete" onClick={handleDeletePlate}>Excluir Prato</button>
          <button className="Save"
           onClick={handleEditPlate}>Salvar alterações</button>
        </SaveBtn>
      </NewDiv>

      <Footer />
    </Container>
  );
}
